import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_field_type as shared_autopilot_v1_assistant_field_type


CREATE_FIELD_TYPE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class CreateFieldTypePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateFieldTypeCreateFieldTypeRequest:
    unique_name: str = dataclasses.field(metadata={'form': { 'field_name': 'UniqueName' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class CreateFieldTypeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateFieldTypeRequest:
    path_params: CreateFieldTypePathParams = dataclasses.field()
    security: CreateFieldTypeSecurity = dataclasses.field()
    request: Optional[CreateFieldTypeCreateFieldTypeRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateFieldTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_field_type: Optional[shared_autopilot_v1_assistant_field_type.AutopilotV1AssistantFieldType] = dataclasses.field(default=None)
    
