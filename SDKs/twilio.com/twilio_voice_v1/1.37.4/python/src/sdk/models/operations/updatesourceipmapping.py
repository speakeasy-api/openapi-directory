import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import voice_v1_source_ip_mapping as shared_voice_v1_source_ip_mapping


UPDATE_SOURCE_IP_MAPPING_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class UpdateSourceIPMappingPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSourceIPMappingUpdateSourceIPMappingRequest:
    sip_domain_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'SipDomainSid' }})
    

@dataclasses.dataclass
class UpdateSourceIPMappingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSourceIPMappingRequest:
    path_params: UpdateSourceIPMappingPathParams = dataclasses.field()
    security: UpdateSourceIPMappingSecurity = dataclasses.field()
    request: Optional[UpdateSourceIPMappingUpdateSourceIPMappingRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSourceIPMappingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_v1_source_ip_mapping: Optional[shared_voice_v1_source_ip_mapping.VoiceV1SourceIPMapping] = dataclasses.field(default=None)
    
