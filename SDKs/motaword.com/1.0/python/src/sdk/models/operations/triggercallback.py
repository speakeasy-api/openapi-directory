import dataclasses
from typing import Optional
from enum import Enum
from ..shared import callbackresult as shared_callbackresult
from ..shared import error as shared_error

class TriggerCallbackActionTypeEnum(str, Enum):
    TRANSLATED = "translated"
    PROOFREAD = "proofread"
    COMPLETED = "completed"


@dataclasses.dataclass
class TriggerCallbackPathParams:
    action_type: TriggerCallbackActionTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'actionType', 'style': 'simple', 'explode': False }})
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TriggerCallbackRequest:
    path_params: TriggerCallbackPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TriggerCallbackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    callback_result: Optional[shared_callbackresult.CallbackResult] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
