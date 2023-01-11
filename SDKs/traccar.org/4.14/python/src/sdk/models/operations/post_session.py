import dataclasses
from typing import Any,Optional
from ..shared import user as shared_user


@dataclasses.dataclass
class PostSessionRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class PostSessionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
