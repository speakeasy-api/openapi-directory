package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebchannelFollow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public WebchannelFollowEmbedded embedded;
    public WebchannelFollow withEmbedded(WebchannelFollowEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webchannel_id")
    public Long webchannelId;
    public WebchannelFollow withWebchannelId(Long webchannelId) {
        this.webchannelId = webchannelId;
        return this;
    }
}