import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import voice_v1_ip_record as shared_voice_v1_ip_record


UPDATE_IP_RECORD_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class UpdateIPRecordPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateIPRecordUpdateIPRecordRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateIPRecordSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateIPRecordRequest:
    path_params: UpdateIPRecordPathParams = dataclasses.field()
    security: UpdateIPRecordSecurity = dataclasses.field()
    request: Optional[UpdateIPRecordUpdateIPRecordRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateIPRecordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_v1_ip_record: Optional[shared_voice_v1_ip_record.VoiceV1IPRecord] = dataclasses.field(default=None)
    
