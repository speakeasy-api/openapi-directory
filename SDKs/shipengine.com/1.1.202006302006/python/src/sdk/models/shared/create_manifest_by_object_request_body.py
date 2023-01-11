import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateManifestByObjectRequestBody:
    r"""CreateManifestByObjectRequestBody
    A create manifest request body
    """
    
    carrier_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_id') }})
    ship_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    warehouse_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse_id') }})
    excluded_label_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excluded_label_ids') }})
    label_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_ids') }})
    
