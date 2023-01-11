import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import completeuser as shared_completeuser
from ..shared import error as shared_error


@dataclasses.dataclass
class GetUsersUserIDPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersUserIDSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetUsersUserIDRequest:
    path_params: GetUsersUserIDPathParams = dataclasses.field()
    security: GetUsersUserIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersUserIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    complete_user: Optional[shared_completeuser.CompleteUser] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
