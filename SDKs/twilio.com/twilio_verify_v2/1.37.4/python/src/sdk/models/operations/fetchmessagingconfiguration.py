import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service_messaging_configuration as shared_verify_v2_service_messaging_configuration


FETCH_MESSAGING_CONFIGURATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class FetchMessagingConfigurationPathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Country', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchMessagingConfigurationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchMessagingConfigurationRequest:
    path_params: FetchMessagingConfigurationPathParams = dataclasses.field()
    security: FetchMessagingConfigurationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchMessagingConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_messaging_configuration: Optional[shared_verify_v2_service_messaging_configuration.VerifyV2ServiceMessagingConfiguration] = dataclasses.field(default=None)
    
