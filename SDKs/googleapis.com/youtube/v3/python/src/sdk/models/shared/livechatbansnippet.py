import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelprofiledetails as shared_channelprofiledetails

class LiveChatBanSnippetTypeEnum(str, Enum):
    LIVE_CHAT_BAN_TYPE_UNSPECIFIED = "liveChatBanTypeUnspecified"
    PERMANENT = "permanent"
    TEMPORARY = "temporary"


@dataclass_json
@dataclasses.dataclass
class LiveChatBanSnippet:
    ban_duration_seconds: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('banDurationSeconds') }})
    banned_user_details: Optional[shared_channelprofiledetails.ChannelProfileDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannedUserDetails') }})
    live_chat_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveChatId') }})
    type: Optional[LiveChatBanSnippetTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
