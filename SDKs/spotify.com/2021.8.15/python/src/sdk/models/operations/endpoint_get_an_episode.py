import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import episodeobject as shared_episodeobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetAnEpisodePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAnEpisodeQueryParams:
    market: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetAnEpisodeHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAnEpisodeSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetAnEpisodeRequest:
    headers: EndpointGetAnEpisodeHeaders = dataclasses.field()
    path_params: EndpointGetAnEpisodePathParams = dataclasses.field()
    query_params: EndpointGetAnEpisodeQueryParams = dataclasses.field()
    security: EndpointGetAnEpisodeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetAnEpisodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    episode_object: Optional[shared_episodeobject.EpisodeObject] = dataclasses.field(default=None)
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
