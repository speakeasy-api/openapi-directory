import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_style_sheet as shared_preview_understand_assistant_style_sheet


UPDATE_UNDERSTAND_STYLE_SHEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateUnderstandStyleSheetPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest:
    style_sheet: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StyleSheet' }})
    

@dataclasses.dataclass
class UpdateUnderstandStyleSheetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateUnderstandStyleSheetRequest:
    path_params: UpdateUnderstandStyleSheetPathParams = dataclasses.field()
    security: UpdateUnderstandStyleSheetSecurity = dataclasses.field()
    request: Optional[UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateUnderstandStyleSheetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_style_sheet: Optional[shared_preview_understand_assistant_style_sheet.PreviewUnderstandAssistantStyleSheet] = dataclasses.field(default=None)
    
