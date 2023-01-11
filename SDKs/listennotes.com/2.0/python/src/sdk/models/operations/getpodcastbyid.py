import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import podcastfull as shared_podcastfull


@dataclasses.dataclass
class GetPodcastByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetPodcastByIDSortEnum(str, Enum):
    RECENT_FIRST = "recent_first"
    OLDEST_FIRST = "oldest_first"


@dataclasses.dataclass
class GetPodcastByIDQueryParams:
    next_episode_pub_date: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_episode_pub_date', 'style': 'form', 'explode': True }})
    sort: Optional[GetPodcastByIDSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPodcastByIDHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPodcastByIDRequest:
    headers: GetPodcastByIDHeaders = dataclasses.field()
    path_params: GetPodcastByIDPathParams = dataclasses.field()
    query_params: GetPodcastByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPodcastByIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    podcast_full: Optional[shared_podcastfull.PodcastFull] = dataclasses.field(default=None)
    
