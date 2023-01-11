import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import serverless_v1_service as shared_serverless_v1_service


UPDATE_SERVICE_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class UpdateServicePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceUpdateServiceRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    include_credentials: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IncludeCredentials' }})
    ui_editable: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UiEditable' }})
    

@dataclasses.dataclass
class UpdateServiceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateServiceRequest:
    path_params: UpdateServicePathParams = dataclasses.field()
    security: UpdateServiceSecurity = dataclasses.field()
    request: Optional[UpdateServiceUpdateServiceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    serverless_v1_service: Optional[shared_serverless_v1_service.ServerlessV1Service] = dataclasses.field(default=None)
    
