package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * LiveChatMessageSnippet
 * Next ID: 33
**/
public class LiveChatMessageSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorChannelId")
    public String authorChannelId;
    public LiveChatMessageSnippet withAuthorChannelId(String authorChannelId) {
        this.authorChannelId = authorChannelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayMessage")
    public String displayMessage;
    public LiveChatMessageSnippet withDisplayMessage(String displayMessage) {
        this.displayMessage = displayMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fanFundingEventDetails")
    public LiveChatFanFundingEventDetails fanFundingEventDetails;
    public LiveChatMessageSnippet withFanFundingEventDetails(LiveChatFanFundingEventDetails fanFundingEventDetails) {
        this.fanFundingEventDetails = fanFundingEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("giftMembershipReceivedDetails")
    public LiveChatGiftMembershipReceivedDetails giftMembershipReceivedDetails;
    public LiveChatMessageSnippet withGiftMembershipReceivedDetails(LiveChatGiftMembershipReceivedDetails giftMembershipReceivedDetails) {
        this.giftMembershipReceivedDetails = giftMembershipReceivedDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasDisplayContent")
    public Boolean hasDisplayContent;
    public LiveChatMessageSnippet withHasDisplayContent(Boolean hasDisplayContent) {
        this.hasDisplayContent = hasDisplayContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liveChatId")
    public String liveChatId;
    public LiveChatMessageSnippet withLiveChatId(String liveChatId) {
        this.liveChatId = liveChatId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberMilestoneChatDetails")
    public LiveChatMemberMilestoneChatDetails memberMilestoneChatDetails;
    public LiveChatMessageSnippet withMemberMilestoneChatDetails(LiveChatMemberMilestoneChatDetails memberMilestoneChatDetails) {
        this.memberMilestoneChatDetails = memberMilestoneChatDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipGiftingDetails")
    public LiveChatMembershipGiftingDetails membershipGiftingDetails;
    public LiveChatMessageSnippet withMembershipGiftingDetails(LiveChatMembershipGiftingDetails membershipGiftingDetails) {
        this.membershipGiftingDetails = membershipGiftingDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageDeletedDetails")
    public LiveChatMessageDeletedDetails messageDeletedDetails;
    public LiveChatMessageSnippet withMessageDeletedDetails(LiveChatMessageDeletedDetails messageDeletedDetails) {
        this.messageDeletedDetails = messageDeletedDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageRetractedDetails")
    public LiveChatMessageRetractedDetails messageRetractedDetails;
    public LiveChatMessageSnippet withMessageRetractedDetails(LiveChatMessageRetractedDetails messageRetractedDetails) {
        this.messageRetractedDetails = messageRetractedDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newSponsorDetails")
    public LiveChatNewSponsorDetails newSponsorDetails;
    public LiveChatMessageSnippet withNewSponsorDetails(LiveChatNewSponsorDetails newSponsorDetails) {
        this.newSponsorDetails = newSponsorDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("publishedAt")
    public OffsetDateTime publishedAt;
    public LiveChatMessageSnippet withPublishedAt(OffsetDateTime publishedAt) {
        this.publishedAt = publishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("superChatDetails")
    public LiveChatSuperChatDetails superChatDetails;
    public LiveChatMessageSnippet withSuperChatDetails(LiveChatSuperChatDetails superChatDetails) {
        this.superChatDetails = superChatDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("superStickerDetails")
    public LiveChatSuperStickerDetails superStickerDetails;
    public LiveChatMessageSnippet withSuperStickerDetails(LiveChatSuperStickerDetails superStickerDetails) {
        this.superStickerDetails = superStickerDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textMessageDetails")
    public LiveChatTextMessageDetails textMessageDetails;
    public LiveChatMessageSnippet withTextMessageDetails(LiveChatTextMessageDetails textMessageDetails) {
        this.textMessageDetails = textMessageDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public LiveChatMessageSnippetTypeEnum type;
    public LiveChatMessageSnippet withType(LiveChatMessageSnippetTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userBannedDetails")
    public LiveChatUserBannedMessageDetails userBannedDetails;
    public LiveChatMessageSnippet withUserBannedDetails(LiveChatUserBannedMessageDetails userBannedDetails) {
        this.userBannedDetails = userBannedDetails;
        return this;
    }
}