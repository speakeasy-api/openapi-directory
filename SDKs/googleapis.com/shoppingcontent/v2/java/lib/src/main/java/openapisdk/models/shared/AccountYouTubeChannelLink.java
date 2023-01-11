package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountYouTubeChannelLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public AccountYouTubeChannelLink withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public AccountYouTubeChannelLink withStatus(String status) {
        this.status = status;
        return this;
    }
}