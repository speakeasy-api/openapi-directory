import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import area as shared_area


@dataclass_json
@dataclasses.dataclass
class AreaResponse:
    areas: Optional[list[shared_area.Area]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('areas') }})
    row_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_count') }})
    
