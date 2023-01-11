package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebchannelFollowEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webchannel")
    public java.util.Map<String, Object> webchannel;
    public WebchannelFollowEmbedded withWebchannel(java.util.Map<String, Object> webchannel) {
        this.webchannel = webchannel;
        return this;
    }
}