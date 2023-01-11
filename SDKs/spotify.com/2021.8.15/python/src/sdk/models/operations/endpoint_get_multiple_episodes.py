import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import episodesobject as shared_episodesobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetMultipleEpisodesQueryParams:
    ids: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    market: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetMultipleEpisodesHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetMultipleEpisodesSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetMultipleEpisodesRequest:
    headers: EndpointGetMultipleEpisodesHeaders = dataclasses.field()
    query_params: EndpointGetMultipleEpisodesQueryParams = dataclasses.field()
    security: EndpointGetMultipleEpisodesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetMultipleEpisodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    episodes_object: Optional[shared_episodesobject.EpisodesObject] = dataclasses.field(default=None)
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
