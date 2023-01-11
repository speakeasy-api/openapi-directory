import dataclasses
from typing import Optional
from ..shared import showvote as shared_showvote
from ..shared import showvote as shared_showvote


@dataclasses.dataclass
class PutUserVotesShowsShowIDPathParams:
    show_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUserVotesShowsShowIDRequest:
    path_params: PutUserVotesShowsShowIDPathParams = dataclasses.field()
    request: Optional[shared_showvote.ShowVoteInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutUserVotesShowsShowIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    show_vote: Optional[shared_showvote.ShowVote] = dataclasses.field(default=None)
    
