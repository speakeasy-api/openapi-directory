import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fileneedsvendor as shared_fileneedsvendor


@dataclass_json
@dataclasses.dataclass
class VendorWithNeeds:
    matched_needs: Optional[list[shared_fileneedsvendor.FileNeedsVendor]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedNeeds') }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
