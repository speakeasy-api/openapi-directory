import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sitetype as shared_sitetype


@dataclass_json
@dataclasses.dataclass
class SiteTypeResponse:
    row_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_count') }})
    sitetypes: Optional[list[shared_sitetype.SiteType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sitetypes') }})
    
