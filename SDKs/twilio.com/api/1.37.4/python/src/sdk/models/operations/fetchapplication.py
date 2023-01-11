import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_application as shared_api_v2010_account_application


FETCH_APPLICATION_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchApplicationPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchApplicationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchApplicationRequest:
    path_params: FetchApplicationPathParams = dataclasses.field()
    security: FetchApplicationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_application: Optional[shared_api_v2010_account_application.APIV2010AccountApplication] = dataclasses.field(default=None)
    
