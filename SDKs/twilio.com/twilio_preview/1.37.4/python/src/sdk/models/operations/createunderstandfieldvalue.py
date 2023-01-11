import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_field_type_field_value as shared_preview_understand_assistant_field_type_field_value


CREATE_UNDERSTAND_FIELD_VALUE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateUnderstandFieldValuePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    field_type_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FieldTypeSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateUnderstandFieldValueCreateUnderstandFieldValueRequest:
    language: str = dataclasses.field(metadata={'form': { 'field_name': 'Language' }})
    value: str = dataclasses.field(metadata={'form': { 'field_name': 'Value' }})
    synonym_of: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SynonymOf' }})
    

@dataclasses.dataclass
class CreateUnderstandFieldValueSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateUnderstandFieldValueRequest:
    path_params: CreateUnderstandFieldValuePathParams = dataclasses.field()
    security: CreateUnderstandFieldValueSecurity = dataclasses.field()
    request: Optional[CreateUnderstandFieldValueCreateUnderstandFieldValueRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateUnderstandFieldValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_field_type_field_value: Optional[shared_preview_understand_assistant_field_type_field_value.PreviewUnderstandAssistantFieldTypeFieldValue] = dataclasses.field(default=None)
    
