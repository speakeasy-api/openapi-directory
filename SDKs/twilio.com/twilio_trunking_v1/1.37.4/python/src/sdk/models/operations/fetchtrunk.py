import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trunking_v1_trunk as shared_trunking_v1_trunk


FETCH_TRUNK_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclasses.dataclass
class FetchTrunkPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTrunkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTrunkRequest:
    path_params: FetchTrunkPathParams = dataclasses.field()
    security: FetchTrunkSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTrunkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trunking_v1_trunk: Optional[shared_trunking_v1_trunk.TrunkingV1Trunk] = dataclasses.field(default=None)
    
