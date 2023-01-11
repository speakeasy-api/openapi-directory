import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderscustombatchresponseentry as shared_orderscustombatchresponseentry


@dataclass_json
@dataclasses.dataclass
class OrdersCustomBatchResponse:
    entries: Optional[list[shared_orderscustombatchresponseentry.OrdersCustomBatchResponseEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
