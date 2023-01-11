import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import microvisor_v1_app as shared_microvisor_v1_app


FETCH_APP_SERVERS = [
	"https://microvisor.twilio.com",
]


@dataclasses.dataclass
class FetchAppPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchAppSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchAppRequest:
    path_params: FetchAppPathParams = dataclasses.field()
    security: FetchAppSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchAppResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    microvisor_v1_app: Optional[shared_microvisor_v1_app.MicrovisorV1App] = dataclasses.field(default=None)
    
