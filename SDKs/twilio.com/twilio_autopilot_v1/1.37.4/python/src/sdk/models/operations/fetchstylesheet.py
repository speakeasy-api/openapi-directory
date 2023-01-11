import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_style_sheet as shared_autopilot_v1_assistant_style_sheet


FETCH_STYLE_SHEET_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class FetchStyleSheetPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchStyleSheetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchStyleSheetRequest:
    path_params: FetchStyleSheetPathParams = dataclasses.field()
    security: FetchStyleSheetSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchStyleSheetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_style_sheet: Optional[shared_autopilot_v1_assistant_style_sheet.AutopilotV1AssistantStyleSheet] = dataclasses.field(default=None)
    
