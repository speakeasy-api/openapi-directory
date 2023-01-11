import dataclasses
from typing import Optional
from ..shared import getcuratedpodcastsresponse as shared_getcuratedpodcastsresponse


@dataclasses.dataclass
class GetCuratedPodcastsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCuratedPodcastsHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCuratedPodcastsRequest:
    headers: GetCuratedPodcastsHeaders = dataclasses.field()
    query_params: GetCuratedPodcastsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCuratedPodcastsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_curated_podcasts_response: Optional[shared_getcuratedpodcastsresponse.GetCuratedPodcastsResponse] = dataclasses.field(default=None)
    
