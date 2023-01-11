import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import searchresponse as shared_searchresponse

class SearchTypeEnum(str, Enum):
    EPISODE = "episode"
    PODCAST = "podcast"
    CURATED = "curated"


@dataclasses.dataclass
class SearchQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    episode_count_max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'episode_count_max', 'style': 'form', 'explode': True }})
    episode_count_min: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'episode_count_min', 'style': 'form', 'explode': True }})
    genre_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'genre_ids', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    len_max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'len_max', 'style': 'form', 'explode': True }})
    len_min: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'len_min', 'style': 'form', 'explode': True }})
    ncid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ncid', 'style': 'form', 'explode': True }})
    ocid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ocid', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    only_in: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'only_in', 'style': 'form', 'explode': True }})
    published_after: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'published_after', 'style': 'form', 'explode': True }})
    published_before: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'published_before', 'style': 'form', 'explode': True }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    safe_mode: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'safe_mode', 'style': 'form', 'explode': True }})
    sort_by_date: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by_date', 'style': 'form', 'explode': True }})
    type: Optional[SearchTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SearchRequest:
    headers: SearchHeaders = dataclasses.field()
    query_params: SearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    search_response: Optional[shared_searchresponse.SearchResponse] = dataclasses.field(default=None)
    
