import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import tracksobject as shared_tracksobject


@dataclasses.dataclass
class EndpointGetAnArtistsTopTracksPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAnArtistsTopTracksQueryParams:
    market: str = dataclasses.field(metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetAnArtistsTopTracksHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAnArtistsTopTracksSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetAnArtistsTopTracksRequest:
    headers: EndpointGetAnArtistsTopTracksHeaders = dataclasses.field()
    path_params: EndpointGetAnArtistsTopTracksPathParams = dataclasses.field()
    query_params: EndpointGetAnArtistsTopTracksQueryParams = dataclasses.field()
    security: EndpointGetAnArtistsTopTracksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetAnArtistsTopTracksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    tracks_object: Optional[shared_tracksobject.TracksObject] = dataclasses.field(default=None)
    
