import { SpeakeasyBase } from "../../../internal/utils";
import { LiveChatFanFundingEventDetails } from "./livechatfanfundingeventdetails";
import { LiveChatGiftMembershipReceivedDetails } from "./livechatgiftmembershipreceiveddetails";
import { LiveChatMemberMilestoneChatDetails } from "./livechatmembermilestonechatdetails";
import { LiveChatMembershipGiftingDetails } from "./livechatmembershipgiftingdetails";
import { LiveChatMessageDeletedDetails } from "./livechatmessagedeleteddetails";
import { LiveChatMessageRetractedDetails } from "./livechatmessageretracteddetails";
import { LiveChatNewSponsorDetails } from "./livechatnewsponsordetails";
import { LiveChatSuperChatDetails } from "./livechatsuperchatdetails";
import { LiveChatSuperStickerDetails } from "./livechatsuperstickerdetails";
import { LiveChatTextMessageDetails } from "./livechattextmessagedetails";
import { LiveChatUserBannedMessageDetails } from "./livechatuserbannedmessagedetails";
/**
 * The type of message, this will always be present, it determines the contents of the message as well as which fields will be present.
 */
export declare enum LiveChatMessageSnippetTypeEnum {
    InvalidType = "invalidType",
    TextMessageEvent = "textMessageEvent",
    Tombstone = "tombstone",
    FanFundingEvent = "fanFundingEvent",
    ChatEndedEvent = "chatEndedEvent",
    SponsorOnlyModeStartedEvent = "sponsorOnlyModeStartedEvent",
    SponsorOnlyModeEndedEvent = "sponsorOnlyModeEndedEvent",
    NewSponsorEvent = "newSponsorEvent",
    MemberMilestoneChatEvent = "memberMilestoneChatEvent",
    MembershipGiftingEvent = "membershipGiftingEvent",
    GiftMembershipReceivedEvent = "giftMembershipReceivedEvent",
    MessageDeletedEvent = "messageDeletedEvent",
    MessageRetractedEvent = "messageRetractedEvent",
    UserBannedEvent = "userBannedEvent",
    SuperChatEvent = "superChatEvent",
    SuperStickerEvent = "superStickerEvent"
}
/**
 * Next ID: 33
 */
export declare class LiveChatMessageSnippet extends SpeakeasyBase {
    /**
     * The ID of the user that authored this message, this field is not always filled. textMessageEvent - the user that wrote the message fanFundingEvent - the user that funded the broadcast newSponsorEvent - the user that just became a sponsor memberMilestoneChatEvent - the member that sent the message membershipGiftingEvent - the user that made the purchase giftMembershipReceivedEvent - the user that received the gift membership messageDeletedEvent - the moderator that took the action messageRetractedEvent - the author that retracted their message userBannedEvent - the moderator that took the action superChatEvent - the user that made the purchase superStickerEvent - the user that made the purchase
     */
    authorChannelId?: string;
    /**
     * Contains a string that can be displayed to the user. If this field is not present the message is silent, at the moment only messages of type TOMBSTONE and CHAT_ENDED_EVENT are silent.
     */
    displayMessage?: string;
    fanFundingEventDetails?: LiveChatFanFundingEventDetails;
    giftMembershipReceivedDetails?: LiveChatGiftMembershipReceivedDetails;
    /**
     * Whether the message has display content that should be displayed to users.
     */
    hasDisplayContent?: boolean;
    liveChatId?: string;
    memberMilestoneChatDetails?: LiveChatMemberMilestoneChatDetails;
    membershipGiftingDetails?: LiveChatMembershipGiftingDetails;
    messageDeletedDetails?: LiveChatMessageDeletedDetails;
    messageRetractedDetails?: LiveChatMessageRetractedDetails;
    newSponsorDetails?: LiveChatNewSponsorDetails;
    /**
     * The date and time when the message was orignally published.
     */
    publishedAt?: Date;
    superChatDetails?: LiveChatSuperChatDetails;
    superStickerDetails?: LiveChatSuperStickerDetails;
    textMessageDetails?: LiveChatTextMessageDetails;
    /**
     * The type of message, this will always be present, it determines the contents of the message as well as which fields will be present.
     */
    type?: LiveChatMessageSnippetTypeEnum;
    userBannedDetails?: LiveChatUserBannedMessageDetails;
}
