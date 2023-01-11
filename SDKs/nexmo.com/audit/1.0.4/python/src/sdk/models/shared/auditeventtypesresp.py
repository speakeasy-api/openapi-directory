import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auditeventtype as shared_auditeventtype


@dataclass_json
@dataclasses.dataclass
class AuditEventTypesResp:
    event_types: Optional[list[shared_auditeventtype.AuditEventType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTypes') }})
    
