import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ChangelogTypeEnum(str, Enum):
    UNKNOWN = ""
    ADDED = "added"
    FIXED = "fixed"
    IMPROVED = "improved"
    DEPRECATED = "deprecated"
    REMOVED = "removed"


@dataclass_json
@dataclasses.dataclass
class Changelog:
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    hidden: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    type: Optional[ChangelogTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
