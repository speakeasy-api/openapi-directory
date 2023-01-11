import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insertionorder as shared_insertionorder


@dataclass_json
@dataclasses.dataclass
class ListInsertionOrdersResponse:
    insertion_orders: Optional[list[shared_insertionorder.InsertionOrder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertionOrders') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
