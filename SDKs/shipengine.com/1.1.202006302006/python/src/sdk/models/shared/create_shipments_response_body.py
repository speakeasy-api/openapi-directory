import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import create_and_validate_shipment as shared_create_and_validate_shipment


@dataclass_json
@dataclasses.dataclass
class CreateShipmentsResponseBody:
    r"""CreateShipmentsResponseBody
    A create shipments response body
    """
    
    has_errors: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_errors') }})
    shipments: list[shared_create_and_validate_shipment.CreateAndValidateShipment] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipments') }})
    
