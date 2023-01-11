import dataclasses
from typing import Optional
from ..shared import suspendedrequest as shared_suspendedrequest
from ..shared import error as shared_error


@dataclasses.dataclass
class PutUsersUserEmailSuspendPathParams:
    user_email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUsersUserEmailSuspendRequest:
    path_params: PutUsersUserEmailSuspendPathParams = dataclasses.field()
    request: shared_suspendedrequest.SuspendedRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutUsersUserEmailSuspendResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
