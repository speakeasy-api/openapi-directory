import dataclasses
from typing import Optional
from enum import Enum
from ..shared import showfollow as shared_showfollow

class GetUserFollowsShowsEmbedEnum(str, Enum):
    SHOW = "show"


@dataclasses.dataclass
class GetUserFollowsShowsQueryParams:
    embed: Optional[GetUserFollowsShowsEmbedEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserFollowsShowsRequest:
    query_params: GetUserFollowsShowsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserFollowsShowsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    show_follows: Optional[list[shared_showfollow.ShowFollow]] = dataclasses.field(default=None)
    
