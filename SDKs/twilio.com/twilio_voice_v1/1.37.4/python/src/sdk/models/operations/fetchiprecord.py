import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import voice_v1_ip_record as shared_voice_v1_ip_record


FETCH_IP_RECORD_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class FetchIPRecordPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchIPRecordSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchIPRecordRequest:
    path_params: FetchIPRecordPathParams = dataclasses.field()
    security: FetchIPRecordSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchIPRecordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_v1_ip_record: Optional[shared_voice_v1_ip_record.VoiceV1IPRecord] = dataclasses.field(default=None)
    
