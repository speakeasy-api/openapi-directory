package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveChatBanSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("banDurationSeconds")
    public String banDurationSeconds;
    public LiveChatBanSnippet withBanDurationSeconds(String banDurationSeconds) {
        this.banDurationSeconds = banDurationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannedUserDetails")
    public ChannelProfileDetails bannedUserDetails;
    public LiveChatBanSnippet withBannedUserDetails(ChannelProfileDetails bannedUserDetails) {
        this.bannedUserDetails = bannedUserDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liveChatId")
    public String liveChatId;
    public LiveChatBanSnippet withLiveChatId(String liveChatId) {
        this.liveChatId = liveChatId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public LiveChatBanSnippetTypeEnum type;
    public LiveChatBanSnippet withType(LiveChatBanSnippetTypeEnum type) {
        this.type = type;
        return this;
    }
}