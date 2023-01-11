import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesslevel as shared_accesslevel


@dataclass_json
@dataclasses.dataclass
class ReplaceAccessLevelsRequest:
    r"""ReplaceAccessLevelsRequest
    A request to replace all existing Access Levels in an Access Policy with the Access Levels provided. This is done atomically.
    """
    
    access_levels: Optional[list[shared_accesslevel.AccessLevel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLevels') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    
