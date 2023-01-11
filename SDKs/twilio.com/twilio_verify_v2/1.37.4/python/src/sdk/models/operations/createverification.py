import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service_verification as shared_verify_v2_service_verification


CREATE_VERIFICATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class CreateVerificationPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateVerificationCreateVerificationRequest:
    channel: str = dataclasses.field(metadata={'form': { 'field_name': 'Channel' }})
    to: str = dataclasses.field(metadata={'form': { 'field_name': 'To' }})
    amount: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Amount' }})
    app_hash: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AppHash' }})
    channel_configuration: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ChannelConfiguration' }})
    custom_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CustomCode' }})
    custom_friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CustomFriendlyName' }})
    custom_message: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CustomMessage' }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Locale' }})
    payee: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Payee' }})
    rate_limits: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RateLimits' }})
    send_digits: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SendDigits' }})
    template_custom_substitutions: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TemplateCustomSubstitutions' }})
    template_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TemplateSid' }})
    

@dataclasses.dataclass
class CreateVerificationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateVerificationRequest:
    path_params: CreateVerificationPathParams = dataclasses.field()
    security: CreateVerificationSecurity = dataclasses.field()
    request: Optional[CreateVerificationCreateVerificationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateVerificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_verification: Optional[shared_verify_v2_service_verification.VerifyV2ServiceVerification] = dataclasses.field(default=None)
    
