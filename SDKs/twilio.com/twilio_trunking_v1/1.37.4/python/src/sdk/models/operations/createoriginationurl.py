import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trunking_v1_trunk_origination_url as shared_trunking_v1_trunk_origination_url


CREATE_ORIGINATION_URL_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclasses.dataclass
class CreateOriginationURLPathParams:
    trunk_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateOriginationURLCreateOriginationURLRequest:
    enabled: bool = dataclasses.field(metadata={'form': { 'field_name': 'Enabled' }})
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    priority: int = dataclasses.field(metadata={'form': { 'field_name': 'Priority' }})
    sip_url: str = dataclasses.field(metadata={'form': { 'field_name': 'SipUrl' }})
    weight: int = dataclasses.field(metadata={'form': { 'field_name': 'Weight' }})
    

@dataclasses.dataclass
class CreateOriginationURLSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateOriginationURLRequest:
    path_params: CreateOriginationURLPathParams = dataclasses.field()
    security: CreateOriginationURLSecurity = dataclasses.field()
    request: Optional[CreateOriginationURLCreateOriginationURLRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateOriginationURLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trunking_v1_trunk_origination_url: Optional[shared_trunking_v1_trunk_origination_url.TrunkingV1TrunkOriginationURL] = dataclasses.field(default=None)
    
