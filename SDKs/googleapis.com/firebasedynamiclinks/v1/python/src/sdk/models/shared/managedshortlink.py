import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dynamiclinkinfo as shared_dynamiclinkinfo

class ManagedShortLinkFlaggedAttributeEnum(str, Enum):
    UNSPECIFIED_ATTRIBUTE = "UNSPECIFIED_ATTRIBUTE"
    SPAM = "SPAM"

class ManagedShortLinkVisibilityEnum(str, Enum):
    UNSPECIFIED_VISIBILITY = "UNSPECIFIED_VISIBILITY"
    UNARCHIVED = "UNARCHIVED"
    ARCHIVED = "ARCHIVED"
    NEVER_SHOWN = "NEVER_SHOWN"


@dataclass_json
@dataclasses.dataclass
class ManagedShortLink:
    r"""ManagedShortLink
    Managed Short Link.
    """
    
    creation_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    flagged_attribute: Optional[list[ManagedShortLinkFlaggedAttributeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flaggedAttribute') }})
    info: Optional[shared_dynamiclinkinfo.DynamicLinkInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    link_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkName') }})
    visibility: Optional[ManagedShortLinkVisibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
