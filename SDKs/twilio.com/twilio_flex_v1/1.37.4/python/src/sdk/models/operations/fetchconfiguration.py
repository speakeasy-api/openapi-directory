import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flex_v1_configuration as shared_flex_v1_configuration


FETCH_CONFIGURATION_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class FetchConfigurationQueryParams:
    ui_version: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'UiVersion', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchConfigurationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchConfigurationRequest:
    query_params: FetchConfigurationQueryParams = dataclasses.field()
    security: FetchConfigurationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_configuration: Optional[shared_flex_v1_configuration.FlexV1Configuration] = dataclasses.field(default=None)
    
