import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import address as shared_address


@dataclass_json
@dataclasses.dataclass
class CreateWarehouseResponseBody:
    r"""CreateWarehouseResponseBody
    A warehouse
    """
    
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    origin_address: shared_address.Address = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin_address') }})
    return_address: shared_address.Address = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('return_address') }})
    warehouse_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse_id') }})
    
