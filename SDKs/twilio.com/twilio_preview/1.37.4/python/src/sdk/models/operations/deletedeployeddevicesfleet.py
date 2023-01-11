import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_DEPLOYED_DEVICES_FLEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class DeleteDeployedDevicesFleetPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDeployedDevicesFleetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteDeployedDevicesFleetRequest:
    path_params: DeleteDeployedDevicesFleetPathParams = dataclasses.field()
    security: DeleteDeployedDevicesFleetSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteDeployedDevicesFleetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
