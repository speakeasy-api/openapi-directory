import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betalabellockcapabilities as shared_googleappsdrivelabelsv2betalabellockcapabilities
from ..shared import googleappsdrivelabelsv2betauserinfo as shared_googleappsdrivelabelsv2betauserinfo

class GoogleAppsDriveLabelsV2betaLabelLockStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaLabelLock:
    r"""GoogleAppsDriveLabelsV2betaLabelLock
    A Lock that can be applied to a Label, Field, or Choice.
    """
    
    capabilities: Optional[shared_googleappsdrivelabelsv2betalabellockcapabilities.GoogleAppsDriveLabelsV2betaLabelLockCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    choice_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choiceId') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    delete_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    field_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleAppsDriveLabelsV2betaLabelLockStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
