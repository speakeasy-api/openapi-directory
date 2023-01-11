import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OrderHeaderOrderStatusEnum(str, Enum):
    ACTIVE = "Active"
    CANCELLED = "Cancelled"
    COMPLETED = "Completed"


@dataclass_json
@dataclasses.dataclass
class OrderHeader:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number_of_line_items: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfLineItems') }})
    order_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderNumber') }})
    order_status: OrderHeaderOrderStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderStatus') }})
    
