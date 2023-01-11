import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trunking_v1_trunk_origination_url as shared_trunking_v1_trunk_origination_url


FETCH_ORIGINATION_URL_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclasses.dataclass
class FetchOriginationURLPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchOriginationURLSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchOriginationURLRequest:
    path_params: FetchOriginationURLPathParams = dataclasses.field()
    security: FetchOriginationURLSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchOriginationURLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trunking_v1_trunk_origination_url: Optional[shared_trunking_v1_trunk_origination_url.TrunkingV1TrunkOriginationURL] = dataclasses.field(default=None)
    
