import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address as shared_api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address


FETCH_SIP_IP_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchSipIPAddressPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    ip_access_control_list_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IpAccessControlListSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSipIPAddressSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSipIPAddressRequest:
    path_params: FetchSipIPAddressPathParams = dataclasses.field()
    security: FetchSipIPAddressSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSipIPAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address: Optional[shared_api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address.APIV2010AccountSipSipIPAccessControlListSipIPAddress] = dataclasses.field(default=None)
    
