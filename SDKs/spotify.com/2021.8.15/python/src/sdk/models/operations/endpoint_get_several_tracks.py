import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import tracksobject as shared_tracksobject


@dataclasses.dataclass
class EndpointGetSeveralTracksQueryParams:
    ids: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    market: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetSeveralTracksHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetSeveralTracksSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetSeveralTracksRequest:
    headers: EndpointGetSeveralTracksHeaders = dataclasses.field()
    query_params: EndpointGetSeveralTracksQueryParams = dataclasses.field()
    security: EndpointGetSeveralTracksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetSeveralTracksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    tracks_object: Optional[shared_tracksobject.TracksObject] = dataclasses.field(default=None)
    
