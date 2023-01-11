import dataclasses
from typing import Optional
from ..shared import getpodcastrecommendationsresponse as shared_getpodcastrecommendationsresponse


@dataclasses.dataclass
class GetPodcastRecommendationsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPodcastRecommendationsQueryParams:
    safe_mode: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'safe_mode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPodcastRecommendationsHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPodcastRecommendationsRequest:
    headers: GetPodcastRecommendationsHeaders = dataclasses.field()
    path_params: GetPodcastRecommendationsPathParams = dataclasses.field()
    query_params: GetPodcastRecommendationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPodcastRecommendationsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_podcast_recommendations_response: Optional[shared_getpodcastrecommendationsresponse.GetPodcastRecommendationsResponse] = dataclasses.field(default=None)
    
