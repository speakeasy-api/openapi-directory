import dataclasses
from typing import Optional
from ..shared import showvote as shared_showvote


@dataclasses.dataclass
class GetUserVotesShowsShowIDPathParams:
    show_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserVotesShowsShowIDRequest:
    path_params: GetUserVotesShowsShowIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserVotesShowsShowIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    show_vote: Optional[shared_showvote.ShowVote] = dataclasses.field(default=None)
    
