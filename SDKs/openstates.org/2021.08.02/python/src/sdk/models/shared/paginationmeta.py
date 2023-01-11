import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PaginationMeta:
    max_page: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_page') }})
    page: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    total_items: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_items') }})
    
