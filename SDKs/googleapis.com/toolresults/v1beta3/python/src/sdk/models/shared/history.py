import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HistoryTestPlatformEnum(str, Enum):
    UNKNOWN_PLATFORM = "unknownPlatform"
    ANDROID = "android"
    IOS = "ios"


@dataclass_json
@dataclasses.dataclass
class History:
    r"""History
    A History represents a sorted list of Executions ordered by the start_timestamp_millis field (descending). It can be used to group all the Executions of a continuous build. Note that the ordering only operates on one-dimension. If a repository has multiple branches, it means that multiple histories will need to be used in order to order Executions per branch.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    history_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('historyId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    test_platform: Optional[HistoryTestPlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testPlatform') }})
    
