import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_restore_assistant as shared_autopilot_v1_restore_assistant


UPDATE_RESTORE_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class UpdateRestoreAssistantUpdateRestoreAssistantRequest:
    assistant: str = dataclasses.field(metadata={'form': { 'field_name': 'Assistant' }})
    

@dataclasses.dataclass
class UpdateRestoreAssistantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateRestoreAssistantRequest:
    security: UpdateRestoreAssistantSecurity = dataclasses.field()
    request: Optional[UpdateRestoreAssistantUpdateRestoreAssistantRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateRestoreAssistantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_restore_assistant: Optional[shared_autopilot_v1_restore_assistant.AutopilotV1RestoreAssistant] = dataclasses.field(default=None)
    
