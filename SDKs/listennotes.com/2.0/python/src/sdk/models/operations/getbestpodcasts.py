import dataclasses
from typing import Optional
from ..shared import bestpodcastsresponse as shared_bestpodcastsresponse


@dataclasses.dataclass
class GetBestPodcastsQueryParams:
    genre_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'genre_id', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    publisher_region: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'publisher_region', 'style': 'form', 'explode': True }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    safe_mode: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'safe_mode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBestPodcastsHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBestPodcastsRequest:
    headers: GetBestPodcastsHeaders = dataclasses.field()
    query_params: GetBestPodcastsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBestPodcastsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    best_podcasts_response: Optional[shared_bestpodcastsresponse.BestPodcastsResponse] = dataclasses.field(default=None)
    
