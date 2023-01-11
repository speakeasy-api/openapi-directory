package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveChatGiftMembershipReceivedDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associatedMembershipGiftingMessageId")
    public String associatedMembershipGiftingMessageId;
    public LiveChatGiftMembershipReceivedDetails withAssociatedMembershipGiftingMessageId(String associatedMembershipGiftingMessageId) {
        this.associatedMembershipGiftingMessageId = associatedMembershipGiftingMessageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gifterChannelId")
    public String gifterChannelId;
    public LiveChatGiftMembershipReceivedDetails withGifterChannelId(String gifterChannelId) {
        this.gifterChannelId = gifterChannelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberLevelName")
    public String memberLevelName;
    public LiveChatGiftMembershipReceivedDetails withMemberLevelName(String memberLevelName) {
        this.memberLevelName = memberLevelName;
        return this;
    }
}