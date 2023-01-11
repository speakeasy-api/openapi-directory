import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_style_sheet as shared_autopilot_v1_assistant_style_sheet


UPDATE_STYLE_SHEET_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class UpdateStyleSheetPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateStyleSheetUpdateStyleSheetRequest:
    style_sheet: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StyleSheet' }})
    

@dataclasses.dataclass
class UpdateStyleSheetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateStyleSheetRequest:
    path_params: UpdateStyleSheetPathParams = dataclasses.field()
    security: UpdateStyleSheetSecurity = dataclasses.field()
    request: Optional[UpdateStyleSheetUpdateStyleSheetRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateStyleSheetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_style_sheet: Optional[shared_autopilot_v1_assistant_style_sheet.AutopilotV1AssistantStyleSheet] = dataclasses.field(default=None)
    
