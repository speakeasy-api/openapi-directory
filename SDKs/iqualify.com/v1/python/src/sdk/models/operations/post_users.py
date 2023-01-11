import dataclasses
from typing import Optional
from ..shared import user as shared_user
from ..shared import error as shared_error
from ..shared import userresponse as shared_userresponse


@dataclasses.dataclass
class PostUsersRequest:
    request: shared_user.User = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    user_response: Optional[shared_userresponse.UserResponse] = dataclasses.field(default=None)
    
