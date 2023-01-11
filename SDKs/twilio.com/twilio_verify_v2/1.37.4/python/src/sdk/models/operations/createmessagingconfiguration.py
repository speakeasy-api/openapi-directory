import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service_messaging_configuration as shared_verify_v2_service_messaging_configuration


CREATE_MESSAGING_CONFIGURATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class CreateMessagingConfigurationPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateMessagingConfigurationCreateMessagingConfigurationRequest:
    country: str = dataclasses.field(metadata={'form': { 'field_name': 'Country' }})
    messaging_service_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'MessagingServiceSid' }})
    

@dataclasses.dataclass
class CreateMessagingConfigurationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateMessagingConfigurationRequest:
    path_params: CreateMessagingConfigurationPathParams = dataclasses.field()
    security: CreateMessagingConfigurationSecurity = dataclasses.field()
    request: Optional[CreateMessagingConfigurationCreateMessagingConfigurationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateMessagingConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_messaging_configuration: Optional[shared_verify_v2_service_messaging_configuration.VerifyV2ServiceMessagingConfiguration] = dataclasses.field(default=None)
    
