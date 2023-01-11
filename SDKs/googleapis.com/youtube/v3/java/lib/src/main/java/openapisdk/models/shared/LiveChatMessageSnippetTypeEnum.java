package openapisdk.models.shared;


public enum LiveChatMessageSnippetTypeEnum {
    INVALID_TYPE("invalidType"),
    TEXT_MESSAGE_EVENT("textMessageEvent"),
    TOMBSTONE("tombstone"),
    FAN_FUNDING_EVENT("fanFundingEvent"),
    CHAT_ENDED_EVENT("chatEndedEvent"),
    SPONSOR_ONLY_MODE_STARTED_EVENT("sponsorOnlyModeStartedEvent"),
    SPONSOR_ONLY_MODE_ENDED_EVENT("sponsorOnlyModeEndedEvent"),
    NEW_SPONSOR_EVENT("newSponsorEvent"),
    MEMBER_MILESTONE_CHAT_EVENT("memberMilestoneChatEvent"),
    MEMBERSHIP_GIFTING_EVENT("membershipGiftingEvent"),
    GIFT_MEMBERSHIP_RECEIVED_EVENT("giftMembershipReceivedEvent"),
    MESSAGE_DELETED_EVENT("messageDeletedEvent"),
    MESSAGE_RETRACTED_EVENT("messageRetractedEvent"),
    USER_BANNED_EVENT("userBannedEvent"),
    SUPER_CHAT_EVENT("superChatEvent"),
    SUPER_STICKER_EVENT("superStickerEvent");

    public final String value;

    private LiveChatMessageSnippetTypeEnum(String value) {
        this.value = value;
    }
}
