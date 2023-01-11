import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteMeFollowingsUserIDPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMeFollowingsUserIDSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteMeFollowingsUserIDRequest:
    path_params: DeleteMeFollowingsUserIDPathParams = dataclasses.field()
    security: DeleteMeFollowingsUserIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteMeFollowingsUserIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
