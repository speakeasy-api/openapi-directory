import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MetaCommunicationMediumEnum(str, Enum):
    MOBILE = "MOBILE"
    EMAIL = "EMAIL"


@dataclass_json
@dataclasses.dataclass
class Meta:
    communication_medium: MetaCommunicationMediumEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('communicationMedium') }})
    communication_expiry: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communicationExpiry') }})
    communication_hint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communicationHint') }})
    
