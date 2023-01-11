import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import licensee as shared_licensee


@dataclass_json
@dataclasses.dataclass
class LicenseeListResult:
    has_more: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasMore') }})
    licensees: Optional[list[shared_licensee.Licensee]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licensees') }})
    
