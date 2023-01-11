import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import trackobject as shared_trackobject


@dataclasses.dataclass
class EndpointGetTrackPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetTrackQueryParams:
    market: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetTrackHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetTrackSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetTrackRequest:
    headers: EndpointGetTrackHeaders = dataclasses.field()
    path_params: EndpointGetTrackPathParams = dataclasses.field()
    query_params: EndpointGetTrackQueryParams = dataclasses.field()
    security: EndpointGetTrackSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetTrackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    track_object: Optional[shared_trackobject.TrackObject] = dataclasses.field(default=None)
    
