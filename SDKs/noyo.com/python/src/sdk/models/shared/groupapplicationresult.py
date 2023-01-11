import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GroupApplicationResultApplicationTypeEnum(str, Enum):
    NEW = "new"
    RENEWAL = "renewal"
    UPSELL = "upsell"

class GroupApplicationResultStatusEnum(str, Enum):
    ACTION_REQUIRED = "action_required"
    CANCELED = "canceled"
    IN_PROGRESS = "in_progress"
    INSTALLED_AT_CARRIER = "installed_at_carrier"
    NOYO_REVIEW = "noyo_review"
    READY_FOR_REQUESTS = "ready_for_requests"
    UNABLE_TO_INSTALL = "unable_to_install"
    WAITING_ON_CARRIER = "waiting_on_carrier"


@dataclass_json
@dataclasses.dataclass
class GroupApplicationResult:
    application_type: GroupApplicationResultApplicationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_type') }})
    carrier_group_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_group_id') }})
    carrier_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_id') }})
    created: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    group_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_id') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    notes: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    status: GroupApplicationResultStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_notes: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_notes') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
