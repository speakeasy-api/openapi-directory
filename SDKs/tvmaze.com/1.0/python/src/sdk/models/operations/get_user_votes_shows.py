import dataclasses
from typing import Optional
from enum import Enum
from ..shared import showvote as shared_showvote

class GetUserVotesShowsEmbedEnum(str, Enum):
    SHOW = "show"


@dataclasses.dataclass
class GetUserVotesShowsQueryParams:
    embed: Optional[GetUserVotesShowsEmbedEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserVotesShowsRequest:
    query_params: GetUserVotesShowsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserVotesShowsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    show_votes: Optional[list[shared_showvote.ShowVote]] = dataclasses.field(default=None)
    
