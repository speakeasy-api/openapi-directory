import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelprofiledetails as shared_channelprofiledetails

class LiveChatUserBannedMessageDetailsBanTypeEnum(str, Enum):
    PERMANENT = "permanent"
    TEMPORARY = "temporary"


@dataclass_json
@dataclasses.dataclass
class LiveChatUserBannedMessageDetails:
    ban_duration_seconds: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('banDurationSeconds') }})
    ban_type: Optional[LiveChatUserBannedMessageDetailsBanTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('banType') }})
    banned_user_details: Optional[shared_channelprofiledetails.ChannelProfileDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannedUserDetails') }})
    
