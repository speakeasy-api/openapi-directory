import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_field_type_field_value as shared_preview_understand_assistant_field_type_field_value


FETCH_UNDERSTAND_FIELD_VALUE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchUnderstandFieldValuePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    field_type_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FieldTypeSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUnderstandFieldValueSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUnderstandFieldValueRequest:
    path_params: FetchUnderstandFieldValuePathParams = dataclasses.field()
    security: FetchUnderstandFieldValueSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUnderstandFieldValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_field_type_field_value: Optional[shared_preview_understand_assistant_field_type_field_value.PreviewUnderstandAssistantFieldTypeFieldValue] = dataclasses.field(default=None)
    
