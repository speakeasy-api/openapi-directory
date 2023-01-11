import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import qualities as shared_qualities


@dataclass_json
@dataclasses.dataclass
class DailyQualityResponse:
    qualities: Optional[list[shared_qualities.Qualities]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Qualities') }})
    row_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_count') }})
    
