import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_sip_sip_domain as shared_api_v2010_account_sip_sip_domain


CREATE_SIP_DOMAIN_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateSipDomainPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateSipDomainCreateSipDomainRequestVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateSipDomainCreateSipDomainRequest:
    domain_name: str = dataclasses.field(metadata={'form': { 'field_name': 'DomainName' }})
    byoc_trunk_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ByocTrunkSid' }})
    emergency_caller_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EmergencyCallerSid' }})
    emergency_calling_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EmergencyCallingEnabled' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    secure: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Secure' }})
    sip_registration: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SipRegistration' }})
    voice_fallback_method: Optional[CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[CreateSipDomainCreateSipDomainRequestVoiceMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_status_callback_method: Optional[CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceStatusCallbackMethod' }})
    voice_status_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceStatusCallbackUrl' }})
    voice_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclasses.dataclass
class CreateSipDomainSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSipDomainRequest:
    path_params: CreateSipDomainPathParams = dataclasses.field()
    security: CreateSipDomainSecurity = dataclasses.field()
    request: Optional[CreateSipDomainCreateSipDomainRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSipDomainResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_sip_sip_domain: Optional[shared_api_v2010_account_sip_sip_domain.APIV2010AccountSipSipDomain] = dataclasses.field(default=None)
    
