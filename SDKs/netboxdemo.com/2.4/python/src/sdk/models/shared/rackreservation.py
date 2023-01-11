import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nestedrack as shared_nestedrack
from ..shared import nestedtenant as shared_nestedtenant
from ..shared import nesteduser as shared_nesteduser


@dataclass_json
@dataclasses.dataclass
class RackReservation:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    rack: shared_nestedrack.NestedRack = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rack') }})
    units: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    user: shared_nesteduser.NestedUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    created: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    tenant: Optional[shared_nestedtenant.NestedTenant] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    
