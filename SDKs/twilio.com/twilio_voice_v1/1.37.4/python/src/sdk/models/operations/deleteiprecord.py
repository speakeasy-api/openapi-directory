import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_IP_RECORD_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class DeleteIPRecordPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteIPRecordSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteIPRecordRequest:
    path_params: DeleteIPRecordPathParams = dataclasses.field()
    security: DeleteIPRecordSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteIPRecordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
