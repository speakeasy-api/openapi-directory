from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_UNDERSTAND_STYLE_SHEET_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchUnderstandStyleSheetPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUnderstandStyleSheetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUnderstandStyleSheetRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchUnderstandStyleSheetPathParams = field(default=None)
    security: FetchUnderstandStyleSheetSecurity = field(default=None)
    

@dataclass
class FetchUnderstandStyleSheetResponses:
    preview_understand_assistant_style_sheet: Optional[shared.PreviewUnderstandAssistantStyleSheet] = field(default=None)
    

@dataclass
class FetchUnderstandStyleSheetResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchUnderstandStyleSheetResponses]] = field(default=None)
    status_code: int = field(default=None)
    
