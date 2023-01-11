import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import serverless_v1_service as shared_serverless_v1_service


CREATE_SERVICE_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class CreateServiceCreateServiceRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: str = dataclasses.field(metadata={'form': { 'field_name': 'UniqueName' }})
    include_credentials: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IncludeCredentials' }})
    ui_editable: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UiEditable' }})
    

@dataclasses.dataclass
class CreateServiceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateServiceRequest:
    security: CreateServiceSecurity = dataclasses.field()
    request: Optional[CreateServiceCreateServiceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    serverless_v1_service: Optional[shared_serverless_v1_service.ServerlessV1Service] = dataclasses.field(default=None)
    
