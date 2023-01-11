import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_short_code as shared_api_v2010_account_short_code


FETCH_SHORT_CODE_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchShortCodePathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchShortCodeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchShortCodeRequest:
    path_params: FetchShortCodePathParams = dataclasses.field()
    security: FetchShortCodeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchShortCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_short_code: Optional[shared_api_v2010_account_short_code.APIV2010AccountShortCode] = dataclasses.field(default=None)
    
