import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apidimensionfilter as shared_apidimensionfilter


@dataclass_json
@dataclasses.dataclass
class APIDimensionFilterGroup:
    filters: Optional[list[shared_apidimensionfilter.APIDimensionFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    group_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupType') }})
    
