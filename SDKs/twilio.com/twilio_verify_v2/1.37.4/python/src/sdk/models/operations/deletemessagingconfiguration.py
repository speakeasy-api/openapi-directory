import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_MESSAGING_CONFIGURATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class DeleteMessagingConfigurationPathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Country', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMessagingConfigurationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteMessagingConfigurationRequest:
    path_params: DeleteMessagingConfigurationPathParams = dataclasses.field()
    security: DeleteMessagingConfigurationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteMessagingConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
