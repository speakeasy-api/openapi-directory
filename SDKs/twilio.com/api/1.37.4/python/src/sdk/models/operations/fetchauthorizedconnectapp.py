import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_authorized_connect_app as shared_api_v2010_account_authorized_connect_app


FETCH_AUTHORIZED_CONNECT_APP_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchAuthorizedConnectAppPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    connect_app_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConnectAppSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchAuthorizedConnectAppSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchAuthorizedConnectAppRequest:
    path_params: FetchAuthorizedConnectAppPathParams = dataclasses.field()
    security: FetchAuthorizedConnectAppSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchAuthorizedConnectAppResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_authorized_connect_app: Optional[shared_api_v2010_account_authorized_connect_app.APIV2010AccountAuthorizedConnectApp] = dataclasses.field(default=None)
    
