import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organization as shared_organization


@dataclass_json
@dataclasses.dataclass
class BillAction:
    classification: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    date_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    order: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    organization: shared_organization.Organization = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    
