import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import userresponse as shared_userresponse


@dataclasses.dataclass
class GetUsersUserEmailPathParams:
    user_email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersUserEmailRequest:
    path_params: GetUsersUserEmailPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersUserEmailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    user_response: Optional[shared_userresponse.UserResponse] = dataclasses.field(default=None)
    
