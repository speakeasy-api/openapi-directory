import dataclasses
from typing import Optional
from ..shared import getepisoderecommendationsresponse as shared_getepisoderecommendationsresponse


@dataclasses.dataclass
class GetEpisodeRecommendationsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEpisodeRecommendationsQueryParams:
    safe_mode: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'safe_mode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEpisodeRecommendationsHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEpisodeRecommendationsRequest:
    headers: GetEpisodeRecommendationsHeaders = dataclasses.field()
    path_params: GetEpisodeRecommendationsPathParams = dataclasses.field()
    query_params: GetEpisodeRecommendationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEpisodeRecommendationsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_episode_recommendations_response: Optional[shared_getepisoderecommendationsresponse.GetEpisodeRecommendationsResponse] = dataclasses.field(default=None)
    
