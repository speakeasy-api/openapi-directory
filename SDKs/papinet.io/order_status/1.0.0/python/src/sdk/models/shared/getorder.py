import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paginationlinks as shared_paginationlinks
from ..shared import orderlineitem as shared_orderlineitem

class GetOrderOrderStatusEnum(str, Enum):
    ACTIVE = "Active"
    CANCELLED = "Cancelled"
    COMPLETED = "Completed"


@dataclass_json
@dataclasses.dataclass
class GetOrder:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number_of_line_items: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfLineItems') }})
    order_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderNumber') }})
    order_status: GetOrderOrderStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderStatus') }})
    links: Optional[shared_paginationlinks.PaginationLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    order_line_items: Optional[list[shared_orderlineitem.OrderLineItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderLineItems') }})
    
