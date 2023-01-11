import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import voice_v1_byoc_trunk as shared_voice_v1_byoc_trunk


CREATE_BYOC_TRUNK_SERVERS = [
	"https://voice.twilio.com",
]

class CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateByocTrunkCreateByocTrunkRequest:
    cnam_lookup_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CnamLookupEnabled' }})
    connection_policy_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConnectionPolicySid' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    from_domain_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FromDomainSid' }})
    status_callback_method: Optional[CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    status_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackUrl' }})
    voice_fallback_method: Optional[CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclasses.dataclass
class CreateByocTrunkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateByocTrunkRequest:
    security: CreateByocTrunkSecurity = dataclasses.field()
    request: Optional[CreateByocTrunkCreateByocTrunkRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateByocTrunkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_v1_byoc_trunk: Optional[shared_voice_v1_byoc_trunk.VoiceV1ByocTrunk] = dataclasses.field(default=None)
    
