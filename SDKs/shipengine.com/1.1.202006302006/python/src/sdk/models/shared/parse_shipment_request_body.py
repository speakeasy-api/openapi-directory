import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partial_shipment as shared_partial_shipment


@dataclass_json
@dataclasses.dataclass
class ParseShipmentRequestBodyInput:
    r"""ParseShipmentRequestBodyInput
    The only required field is `text`, which is the text to be parsed. You can optionally also provide a `shipment` containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use.
    
    """
    
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    shipment: Optional[shared_partial_shipment.PartialShipmentInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipment') }})
    
