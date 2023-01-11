import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointSetVolumeForUsersPlaybackQueryParams:
    volume_percent: int = dataclasses.field(metadata={'query_param': { 'field_name': 'volume_percent', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointSetVolumeForUsersPlaybackHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointSetVolumeForUsersPlaybackSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointSetVolumeForUsersPlaybackRequest:
    headers: EndpointSetVolumeForUsersPlaybackHeaders = dataclasses.field()
    query_params: EndpointSetVolumeForUsersPlaybackQueryParams = dataclasses.field()
    security: EndpointSetVolumeForUsersPlaybackSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointSetVolumeForUsersPlaybackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
