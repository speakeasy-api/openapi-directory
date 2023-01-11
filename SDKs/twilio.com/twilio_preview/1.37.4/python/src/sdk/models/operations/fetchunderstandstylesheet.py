import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_style_sheet as shared_preview_understand_assistant_style_sheet


FETCH_UNDERSTAND_STYLE_SHEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchUnderstandStyleSheetPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUnderstandStyleSheetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUnderstandStyleSheetRequest:
    path_params: FetchUnderstandStyleSheetPathParams = dataclasses.field()
    security: FetchUnderstandStyleSheetSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUnderstandStyleSheetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_style_sheet: Optional[shared_preview_understand_assistant_style_sheet.PreviewUnderstandAssistantStyleSheet] = dataclasses.field(default=None)
    
