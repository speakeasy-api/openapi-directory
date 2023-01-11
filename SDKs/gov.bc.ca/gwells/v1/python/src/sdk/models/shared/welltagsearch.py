import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WellTagSearch:
    owner_full_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner_full_name') }})
    well_tag_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('well_tag_number') }})
    
