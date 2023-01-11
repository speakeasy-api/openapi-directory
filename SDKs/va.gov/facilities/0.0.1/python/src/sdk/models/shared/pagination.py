import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Pagination:
    current_page: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_page') }})
    per_page: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    total_entries: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    total_pages: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_pages') }})
    
