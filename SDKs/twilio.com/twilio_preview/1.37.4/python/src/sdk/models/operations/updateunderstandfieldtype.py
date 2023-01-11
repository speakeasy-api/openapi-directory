import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_field_type as shared_preview_understand_assistant_field_type


UPDATE_UNDERSTAND_FIELD_TYPE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateUnderstandFieldTypePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class UpdateUnderstandFieldTypeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateUnderstandFieldTypeRequest:
    path_params: UpdateUnderstandFieldTypePathParams = dataclasses.field()
    security: UpdateUnderstandFieldTypeSecurity = dataclasses.field()
    request: Optional[UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateUnderstandFieldTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_field_type: Optional[shared_preview_understand_assistant_field_type.PreviewUnderstandAssistantFieldType] = dataclasses.field(default=None)
    
