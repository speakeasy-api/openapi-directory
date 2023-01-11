import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderscustombatchrequestentrycreatetestreturnreturnitem as shared_orderscustombatchrequestentrycreatetestreturnreturnitem


@dataclass_json
@dataclasses.dataclass
class OrdersCreateTestReturnRequest:
    items: Optional[list[shared_orderscustombatchrequestentrycreatetestreturnreturnitem.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
