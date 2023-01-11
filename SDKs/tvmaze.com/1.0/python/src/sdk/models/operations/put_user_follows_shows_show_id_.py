import dataclasses
from typing import Optional
from ..shared import showfollow as shared_showfollow


@dataclasses.dataclass
class PutUserFollowsShowsShowIDPathParams:
    show_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUserFollowsShowsShowIDRequest:
    path_params: PutUserFollowsShowsShowIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutUserFollowsShowsShowIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    show_follow: Optional[shared_showfollow.ShowFollow] = dataclasses.field(default=None)
    
