import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProjectParameterDetails:
    average: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('average') }})
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    first_updated: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastValue') }})
    locations: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    parameter: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    parameter_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterId') }})
    unit: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
