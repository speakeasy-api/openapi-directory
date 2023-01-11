import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import serverless_v1_service_environment_variable as shared_serverless_v1_service_environment_variable


UPDATE_VARIABLE_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class UpdateVariablePathParams:
    environment_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateVariableUpdateVariableRequest:
    key: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Key' }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Value' }})
    

@dataclasses.dataclass
class UpdateVariableSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateVariableRequest:
    path_params: UpdateVariablePathParams = dataclasses.field()
    security: UpdateVariableSecurity = dataclasses.field()
    request: Optional[UpdateVariableUpdateVariableRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateVariableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    serverless_v1_service_environment_variable: Optional[shared_serverless_v1_service_environment_variable.ServerlessV1ServiceEnvironmentVariable] = dataclasses.field(default=None)
    
