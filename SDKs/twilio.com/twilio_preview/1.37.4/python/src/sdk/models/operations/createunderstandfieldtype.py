import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_field_type as shared_preview_understand_assistant_field_type


CREATE_UNDERSTAND_FIELD_TYPE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateUnderstandFieldTypePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest:
    unique_name: str = dataclasses.field(metadata={'form': { 'field_name': 'UniqueName' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class CreateUnderstandFieldTypeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateUnderstandFieldTypeRequest:
    path_params: CreateUnderstandFieldTypePathParams = dataclasses.field()
    security: CreateUnderstandFieldTypeSecurity = dataclasses.field()
    request: Optional[CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateUnderstandFieldTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_field_type: Optional[shared_preview_understand_assistant_field_type.PreviewUnderstandAssistantFieldType] = dataclasses.field(default=None)
    
