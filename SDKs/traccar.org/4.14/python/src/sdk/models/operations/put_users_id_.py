import dataclasses
from typing import Optional
from ..shared import user as shared_user


@dataclasses.dataclass
class PutUsersIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUsersIDRequest:
    path_params: PutUsersIDPathParams = dataclasses.field()
    request: shared_user.User = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutUsersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
