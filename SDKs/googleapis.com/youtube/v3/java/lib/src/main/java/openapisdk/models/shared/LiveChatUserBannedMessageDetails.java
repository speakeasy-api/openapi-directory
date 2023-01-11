package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveChatUserBannedMessageDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("banDurationSeconds")
    public String banDurationSeconds;
    public LiveChatUserBannedMessageDetails withBanDurationSeconds(String banDurationSeconds) {
        this.banDurationSeconds = banDurationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("banType")
    public LiveChatUserBannedMessageDetailsBanTypeEnum banType;
    public LiveChatUserBannedMessageDetails withBanType(LiveChatUserBannedMessageDetailsBanTypeEnum banType) {
        this.banType = banType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannedUserDetails")
    public ChannelProfileDetails bannedUserDetails;
    public LiveChatUserBannedMessageDetails withBannedUserDetails(ChannelProfileDetails bannedUserDetails) {
        this.bannedUserDetails = bannedUserDetails;
        return this;
    }
}