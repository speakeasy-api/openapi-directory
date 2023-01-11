import dataclasses
from typing import Optional
from ..shared import execbody as shared_execbody
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class ExecuteActionPathParams:
    action_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'actionId', 'style': 'simple', 'explode': False }})
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExecuteActionRequest:
    path_params: ExecuteActionPathParams = dataclasses.field()
    request: Optional[shared_execbody.ExecBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExecuteActionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
