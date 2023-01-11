import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import meetingscapability as shared_meetingscapability
from ..shared import messagescapability as shared_messagescapability
from ..shared import rtccapability as shared_rtccapability
from ..shared import verifycapability as shared_verifycapability
from ..shared import voicecapability as shared_voicecapability


@dataclass_json
@dataclasses.dataclass
class Capabilities:
    r"""Capabilities
    Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.
    """
    
    meetings: Optional[shared_meetingscapability.MeetingsCapability] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meetings') }})
    messages: Optional[shared_messagescapability.MessagesCapability] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    rtc: Optional[shared_rtccapability.RtcCapability] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rtc') }})
    vbc: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vbc') }})
    verify: Optional[shared_verifycapability.VerifyCapability] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verify') }})
    voice: Optional[shared_voicecapability.VoiceCapability] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice') }})
    
