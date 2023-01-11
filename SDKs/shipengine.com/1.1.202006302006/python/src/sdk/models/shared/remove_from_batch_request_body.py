import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RemoveFromBatchRequestBody:
    r"""RemoveFromBatchRequestBody
    A modify batch object
    """
    
    rate_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate_ids') }})
    shipment_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipment_ids') }})
    
