package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveChatModeratorSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liveChatId")
    public String liveChatId;
    public LiveChatModeratorSnippet withLiveChatId(String liveChatId) {
        this.liveChatId = liveChatId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moderatorDetails")
    public ChannelProfileDetails moderatorDetails;
    public LiveChatModeratorSnippet withModeratorDetails(ChannelProfileDetails moderatorDetails) {
        this.moderatorDetails = moderatorDetails;
        return this;
    }
}