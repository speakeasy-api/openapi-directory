import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recognized_entity as shared_recognized_entity
from ..shared import partial_shipment as shared_partial_shipment


@dataclass_json
@dataclasses.dataclass
class ParseShipmentResponseBody:
    r"""ParseShipmentResponseBody
    The parsed shipment, as well as a confidence score and a list of all the shipping entities that were recognized in the text.
    
    """
    
    entities: list[shared_recognized_entity.RecognizedEntity] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    score: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    shipment: shared_partial_shipment.PartialShipment = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipment') }})
    
