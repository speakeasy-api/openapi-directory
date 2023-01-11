import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LegislativeSession:
    classification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    end_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date') }})
    identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    start_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date') }})
    
