import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import voice_v1_source_ip_mapping as shared_voice_v1_source_ip_mapping


FETCH_SOURCE_IP_MAPPING_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class FetchSourceIPMappingPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSourceIPMappingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSourceIPMappingRequest:
    path_params: FetchSourceIPMappingPathParams = dataclasses.field()
    security: FetchSourceIPMappingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSourceIPMappingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_v1_source_ip_mapping: Optional[shared_voice_v1_source_ip_mapping.VoiceV1SourceIPMapping] = dataclasses.field(default=None)
    
