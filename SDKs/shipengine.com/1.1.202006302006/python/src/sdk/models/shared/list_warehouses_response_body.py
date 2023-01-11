import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import address as shared_address


@dataclass_json
@dataclasses.dataclass
class ListWarehousesResponseBodyWarehouse:
    r"""ListWarehousesResponseBodyWarehouse
    A warehouse
    """
    
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    origin_address: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin_address') }})
    return_address: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('return_address') }})
    warehouse_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse_id') }})
    

@dataclass_json
@dataclasses.dataclass
class ListWarehousesResponseBody:
    r"""ListWarehousesResponseBody
    A warehouse list response body
    """
    
    warehouses: list[ListWarehousesResponseBodyWarehouse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouses') }})
    
