import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import order as shared_order


@dataclass_json
@dataclasses.dataclass
class OrdersListResponse:
    r"""OrdersListResponse
    Order List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    orders: Optional[list[shared_order.Order]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    
