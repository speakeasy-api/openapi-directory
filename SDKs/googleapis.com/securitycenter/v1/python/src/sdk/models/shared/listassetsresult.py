import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import asset as shared_asset

class ListAssetsResultStateChangeEnum(str, Enum):
    UNUSED = "UNUSED"
    ADDED = "ADDED"
    REMOVED = "REMOVED"
    ACTIVE = "ACTIVE"


@dataclass_json
@dataclasses.dataclass
class ListAssetsResult:
    r"""ListAssetsResult
    Result containing the Asset and its State.
    """
    
    asset: Optional[shared_asset.Asset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset') }})
    state_change: Optional[ListAssetsResultStateChangeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChange') }})
    
