import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TagShipmentResponseBodyTag:
    r"""TagShipmentResponseBodyTag
    Tags are arbitrary strings that you can use to categorize shipments. For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.
    
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class TagShipmentResponseBody:
    r"""TagShipmentResponseBody
    A shipment add tag response body
    """
    
    shipment_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipment_id') }})
    tag: TagShipmentResponseBodyTag = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
