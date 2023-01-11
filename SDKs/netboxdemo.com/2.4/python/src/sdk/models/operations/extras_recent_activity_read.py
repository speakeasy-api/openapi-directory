import dataclasses
from typing import Optional
from ..shared import useraction as shared_useraction


@dataclasses.dataclass
class ExtrasRecentActivityReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasRecentActivityReadRequest:
    path_params: ExtrasRecentActivityReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasRecentActivityReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_action: Optional[shared_useraction.UserAction] = dataclasses.field(default=None)
    
