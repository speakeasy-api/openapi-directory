import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import devicesobject as shared_devicesobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetAUsersAvailableDevicesHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAUsersAvailableDevicesSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetAUsersAvailableDevicesRequest:
    headers: EndpointGetAUsersAvailableDevicesHeaders = dataclasses.field()
    security: EndpointGetAUsersAvailableDevicesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetAUsersAvailableDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    devices_object: Optional[shared_devicesobject.DevicesObject] = dataclasses.field(default=None)
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
