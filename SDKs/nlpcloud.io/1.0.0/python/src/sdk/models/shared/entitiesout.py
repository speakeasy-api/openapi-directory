import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entityout as shared_entityout


@dataclass_json
@dataclasses.dataclass
class EntitiesOut:
    entities: list[shared_entityout.EntityOut] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    
