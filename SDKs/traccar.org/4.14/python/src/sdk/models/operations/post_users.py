import dataclasses
from typing import Optional
from ..shared import user as shared_user


@dataclasses.dataclass
class PostUsersRequest:
    request: shared_user.User = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
