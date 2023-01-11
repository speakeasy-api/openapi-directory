import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address as shared_api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address


UPDATE_SIP_IP_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateSipIPAddressPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    ip_access_control_list_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IpAccessControlListSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSipIPAddressUpdateSipIPAddressRequest:
    cidr_prefix_length: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CidrPrefixLength' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IpAddress' }})
    

@dataclasses.dataclass
class UpdateSipIPAddressSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSipIPAddressRequest:
    path_params: UpdateSipIPAddressPathParams = dataclasses.field()
    security: UpdateSipIPAddressSecurity = dataclasses.field()
    request: Optional[UpdateSipIPAddressUpdateSipIPAddressRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSipIPAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address: Optional[shared_api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address.APIV2010AccountSipSipIPAccessControlListSipIPAddress] = dataclasses.field(default=None)
    
