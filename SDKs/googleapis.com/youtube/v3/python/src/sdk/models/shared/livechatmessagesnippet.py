import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import livechatfanfundingeventdetails as shared_livechatfanfundingeventdetails
from ..shared import livechatgiftmembershipreceiveddetails as shared_livechatgiftmembershipreceiveddetails
from ..shared import livechatmembermilestonechatdetails as shared_livechatmembermilestonechatdetails
from ..shared import livechatmembershipgiftingdetails as shared_livechatmembershipgiftingdetails
from ..shared import livechatmessagedeleteddetails as shared_livechatmessagedeleteddetails
from ..shared import livechatmessageretracteddetails as shared_livechatmessageretracteddetails
from ..shared import livechatnewsponsordetails as shared_livechatnewsponsordetails
from ..shared import livechatsuperchatdetails as shared_livechatsuperchatdetails
from ..shared import livechatsuperstickerdetails as shared_livechatsuperstickerdetails
from ..shared import livechattextmessagedetails as shared_livechattextmessagedetails
from ..shared import livechatuserbannedmessagedetails as shared_livechatuserbannedmessagedetails

class LiveChatMessageSnippetTypeEnum(str, Enum):
    INVALID_TYPE = "invalidType"
    TEXT_MESSAGE_EVENT = "textMessageEvent"
    TOMBSTONE = "tombstone"
    FAN_FUNDING_EVENT = "fanFundingEvent"
    CHAT_ENDED_EVENT = "chatEndedEvent"
    SPONSOR_ONLY_MODE_STARTED_EVENT = "sponsorOnlyModeStartedEvent"
    SPONSOR_ONLY_MODE_ENDED_EVENT = "sponsorOnlyModeEndedEvent"
    NEW_SPONSOR_EVENT = "newSponsorEvent"
    MEMBER_MILESTONE_CHAT_EVENT = "memberMilestoneChatEvent"
    MEMBERSHIP_GIFTING_EVENT = "membershipGiftingEvent"
    GIFT_MEMBERSHIP_RECEIVED_EVENT = "giftMembershipReceivedEvent"
    MESSAGE_DELETED_EVENT = "messageDeletedEvent"
    MESSAGE_RETRACTED_EVENT = "messageRetractedEvent"
    USER_BANNED_EVENT = "userBannedEvent"
    SUPER_CHAT_EVENT = "superChatEvent"
    SUPER_STICKER_EVENT = "superStickerEvent"


@dataclass_json
@dataclasses.dataclass
class LiveChatMessageSnippet:
    r"""LiveChatMessageSnippet
    Next ID: 33
    """
    
    author_channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorChannelId') }})
    display_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayMessage') }})
    fan_funding_event_details: Optional[shared_livechatfanfundingeventdetails.LiveChatFanFundingEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fanFundingEventDetails') }})
    gift_membership_received_details: Optional[shared_livechatgiftmembershipreceiveddetails.LiveChatGiftMembershipReceivedDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('giftMembershipReceivedDetails') }})
    has_display_content: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasDisplayContent') }})
    live_chat_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveChatId') }})
    member_milestone_chat_details: Optional[shared_livechatmembermilestonechatdetails.LiveChatMemberMilestoneChatDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberMilestoneChatDetails') }})
    membership_gifting_details: Optional[shared_livechatmembershipgiftingdetails.LiveChatMembershipGiftingDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipGiftingDetails') }})
    message_deleted_details: Optional[shared_livechatmessagedeleteddetails.LiveChatMessageDeletedDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageDeletedDetails') }})
    message_retracted_details: Optional[shared_livechatmessageretracteddetails.LiveChatMessageRetractedDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageRetractedDetails') }})
    new_sponsor_details: Optional[shared_livechatnewsponsordetails.LiveChatNewSponsorDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newSponsorDetails') }})
    published_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    super_chat_details: Optional[shared_livechatsuperchatdetails.LiveChatSuperChatDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('superChatDetails') }})
    super_sticker_details: Optional[shared_livechatsuperstickerdetails.LiveChatSuperStickerDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('superStickerDetails') }})
    text_message_details: Optional[shared_livechattextmessagedetails.LiveChatTextMessageDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textMessageDetails') }})
    type: Optional[LiveChatMessageSnippetTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_banned_details: Optional[shared_livechatuserbannedmessagedetails.LiveChatUserBannedMessageDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userBannedDetails') }})
    
