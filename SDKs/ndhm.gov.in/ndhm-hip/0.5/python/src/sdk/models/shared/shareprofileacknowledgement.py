import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ShareProfileAcknowledgementStatusEnum(str, Enum):
    SUCCESS = "SUCCESS"
    FAILURE = "FAILURE"


@dataclass_json
@dataclasses.dataclass
class ShareProfileAcknowledgement:
    health_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthId') }})
    status: ShareProfileAcknowledgementStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
