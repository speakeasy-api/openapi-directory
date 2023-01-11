import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ChannelStatusLongUploadsStatusEnum(str, Enum):
    LONG_UPLOADS_UNSPECIFIED = "longUploadsUnspecified"
    ALLOWED = "allowed"
    ELIGIBLE = "eligible"
    DISALLOWED = "disallowed"

class ChannelStatusPrivacyStatusEnum(str, Enum):
    PUBLIC = "public"
    UNLISTED = "unlisted"
    PRIVATE = "private"


@dataclass_json
@dataclasses.dataclass
class ChannelStatus:
    r"""ChannelStatus
    JSON template for the status part of a channel.
    """
    
    is_linked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLinked') }})
    long_uploads_status: Optional[ChannelStatusLongUploadsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longUploadsStatus') }})
    made_for_kids: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('madeForKids') }})
    privacy_status: Optional[ChannelStatusPrivacyStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacyStatus') }})
    self_declared_made_for_kids: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfDeclaredMadeForKids') }})
    
