import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CountriesRow:
    cities: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cities') }})
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    first_updated: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    locations: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameters: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    sources: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
