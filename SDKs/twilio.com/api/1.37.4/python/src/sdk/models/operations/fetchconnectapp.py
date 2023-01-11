import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_connect_app as shared_api_v2010_account_connect_app


FETCH_CONNECT_APP_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchConnectAppPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchConnectAppSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchConnectAppRequest:
    path_params: FetchConnectAppPathParams = dataclasses.field()
    security: FetchConnectAppSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchConnectAppResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_connect_app: Optional[shared_api_v2010_account_connect_app.APIV2010AccountConnectApp] = dataclasses.field(default=None)
    
