import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flex_v1_gooddata as shared_flex_v1_gooddata


CREATE_GOODDATA_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class CreateGooddataHeaders:
    token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateGooddataSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateGooddataRequest:
    headers: CreateGooddataHeaders = dataclasses.field()
    security: CreateGooddataSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateGooddataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_gooddata: Optional[shared_flex_v1_gooddata.FlexV1Gooddata] = dataclasses.field(default=None)
    
