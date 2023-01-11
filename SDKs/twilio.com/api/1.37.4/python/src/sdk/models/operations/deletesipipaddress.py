import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SIP_IP_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class DeleteSipIPAddressPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    ip_access_control_list_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IpAccessControlListSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSipIPAddressSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSipIPAddressRequest:
    path_params: DeleteSipIPAddressPathParams = dataclasses.field()
    security: DeleteSipIPAddressSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSipIPAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
