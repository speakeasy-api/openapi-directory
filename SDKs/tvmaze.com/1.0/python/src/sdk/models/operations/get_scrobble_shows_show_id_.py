import dataclasses
from typing import Optional
from enum import Enum
from ..shared import markedepisode as shared_markedepisode


@dataclasses.dataclass
class GetScrobbleShowsShowIDPathParams:
    show_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    
class GetScrobbleShowsShowIDEmbedEnum(str, Enum):
    EPISODE = "episode"


@dataclasses.dataclass
class GetScrobbleShowsShowIDQueryParams:
    embed: Optional[GetScrobbleShowsShowIDEmbedEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetScrobbleShowsShowIDRequest:
    path_params: GetScrobbleShowsShowIDPathParams = dataclasses.field()
    query_params: GetScrobbleShowsShowIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetScrobbleShowsShowIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    marked_episodes: Optional[list[shared_markedepisode.MarkedEpisode]] = dataclasses.field(default=None)
    
