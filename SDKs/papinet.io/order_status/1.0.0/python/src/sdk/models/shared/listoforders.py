import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paginationlinks as shared_paginationlinks
from ..shared import orderheader as shared_orderheader


@dataclass_json
@dataclasses.dataclass
class ListOfOrders:
    links: Optional[shared_paginationlinks.PaginationLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    orders: Optional[list[shared_orderheader.OrderHeader]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    
