import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import campaignmanagerids as shared_campaignmanagerids
from ..shared import dv3ids as shared_dv3ids

class CustomEventInsertInsertEventTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    IMPRESSION = "IMPRESSION"
    CLICK = "CLICK"


@dataclass_json
@dataclasses.dataclass
class CustomEventInsert:
    r"""CustomEventInsert
    Custom event to be inserted.
    """
    
    cm_dimensions: Optional[shared_campaignmanagerids.CampaignManagerIds] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmDimensions') }})
    dv3_dimensions: Optional[shared_dv3ids.Dv3Ids] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dv3Dimensions') }})
    insert_event_type: Optional[CustomEventInsertInsertEventTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertEventType') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    match_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchId') }})
    mobile_device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileDeviceId') }})
    
