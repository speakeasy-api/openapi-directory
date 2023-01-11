import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreatePayorLinkRequestLinkTypeEnum(str, Enum):
    PARENT_OF = "PARENT_OF"


@dataclass_json
@dataclasses.dataclass
class CreatePayorLinkRequest:
    from_payor_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromPayorId') }})
    link_type: CreatePayorLinkRequestLinkTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkType') }})
    to_payor_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('toPayorId') }})
    
