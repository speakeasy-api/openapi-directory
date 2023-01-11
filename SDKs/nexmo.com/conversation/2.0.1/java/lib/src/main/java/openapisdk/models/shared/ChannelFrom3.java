package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelFrom3
 * Connect to a SIP Endpoint
**/
public class ChannelFrom3 {
    @JsonProperty("type")
    public String type;
    public ChannelFrom3 withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ChannelFrom3 withUri(String uri) {
        this.uri = uri;
        return this;
    }
}