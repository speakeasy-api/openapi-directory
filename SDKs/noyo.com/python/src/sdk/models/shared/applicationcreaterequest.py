import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ApplicationCreateRequestApplicationTypeEnum(str, Enum):
    NEW = "new"
    RENEWAL = "renewal"
    UPSELL = "upsell"


@dataclass_json
@dataclasses.dataclass
class ApplicationCreateRequest:
    application_type: ApplicationCreateRequestApplicationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_type') }})
    carrier_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_id') }})
    carrier_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_group_id') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    
