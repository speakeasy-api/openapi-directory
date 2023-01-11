import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import userbadge as shared_userbadge


@dataclasses.dataclass
class GetUsersUserEmailBadgesPathParams:
    user_email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersUserEmailBadgesRequest:
    path_params: GetUsersUserEmailBadgesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersUserEmailBadgesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    user_badges: Optional[list[shared_userbadge.UserBadge]] = dataclasses.field(default=None)
    
