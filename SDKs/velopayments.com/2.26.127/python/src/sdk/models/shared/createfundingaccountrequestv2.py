import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateFundingAccountRequestV2TypeEnum(str, Enum):
    FBO = "FBO"
    WUBS_DECOUPLED = "WUBS_DECOUPLED"


@dataclass_json
@dataclasses.dataclass
class CreateFundingAccountRequestV2:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    payor_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    type: CreateFundingAccountRequestV2TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    routing_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingNumber') }})
    
