import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import voice_v1_ip_record as shared_voice_v1_ip_record


CREATE_IP_RECORD_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class CreateIPRecordCreateIPRecordRequest:
    ip_address: str = dataclasses.field(metadata={'form': { 'field_name': 'IpAddress' }})
    cidr_prefix_length: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CidrPrefixLength' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class CreateIPRecordSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateIPRecordRequest:
    security: CreateIPRecordSecurity = dataclasses.field()
    request: Optional[CreateIPRecordCreateIPRecordRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateIPRecordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_v1_ip_record: Optional[shared_voice_v1_ip_record.VoiceV1IPRecord] = dataclasses.field(default=None)
    
