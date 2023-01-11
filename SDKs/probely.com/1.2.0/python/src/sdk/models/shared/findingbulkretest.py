import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scanprofile_enum as shared_scanprofile_enum


@dataclass_json
@dataclasses.dataclass
class FindingBulkRetest:
    ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    scan_profile: Optional[shared_scanprofile_enum.ScanProfileEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scan_profile') }})
    
