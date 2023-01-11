package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveChatMessageAuthorDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public LiveChatMessageAuthorDetails withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelUrl")
    public String channelUrl;
    public LiveChatMessageAuthorDetails withChannelUrl(String channelUrl) {
        this.channelUrl = channelUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public LiveChatMessageAuthorDetails withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isChatModerator")
    public Boolean isChatModerator;
    public LiveChatMessageAuthorDetails withIsChatModerator(Boolean isChatModerator) {
        this.isChatModerator = isChatModerator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isChatOwner")
    public Boolean isChatOwner;
    public LiveChatMessageAuthorDetails withIsChatOwner(Boolean isChatOwner) {
        this.isChatOwner = isChatOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isChatSponsor")
    public Boolean isChatSponsor;
    public LiveChatMessageAuthorDetails withIsChatSponsor(Boolean isChatSponsor) {
        this.isChatSponsor = isChatSponsor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isVerified")
    public Boolean isVerified;
    public LiveChatMessageAuthorDetails withIsVerified(Boolean isVerified) {
        this.isVerified = isVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileImageUrl")
    public String profileImageUrl;
    public LiveChatMessageAuthorDetails withProfileImageUrl(String profileImageUrl) {
        this.profileImageUrl = profileImageUrl;
        return this;
    }
}