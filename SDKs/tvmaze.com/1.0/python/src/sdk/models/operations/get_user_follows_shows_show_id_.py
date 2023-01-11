import dataclasses
from typing import Optional
from ..shared import showfollow as shared_showfollow


@dataclasses.dataclass
class GetUserFollowsShowsShowIDPathParams:
    show_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserFollowsShowsShowIDRequest:
    path_params: GetUserFollowsShowsShowIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserFollowsShowsShowIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    show_follow: Optional[shared_showfollow.ShowFollow] = dataclasses.field(default=None)
    
