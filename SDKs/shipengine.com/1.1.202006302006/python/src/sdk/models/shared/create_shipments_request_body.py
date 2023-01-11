import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import address_validating_shipment as shared_address_validating_shipment


@dataclass_json
@dataclasses.dataclass
class CreateShipmentsRequestBodyInput:
    r"""CreateShipmentsRequestBodyInput
    A create shipments request body
    """
    
    shipments: list[shared_address_validating_shipment.AddressValidatingShipmentInput] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipments') }})
    
