package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelFrom4
 * Connect to a Websocket
**/
public class ChannelFrom4 {
    @JsonProperty("content-type")
    public ChannelFrom4ContentTypeEnum contentType;
    public ChannelFrom4 withContentType(ChannelFrom4ContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public ChannelFrom4Headers headers;
    public ChannelFrom4 withHeaders(ChannelFrom4Headers headers) {
        this.headers = headers;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ChannelFrom4 withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ChannelFrom4 withUri(String uri) {
        this.uri = uri;
        return this;
    }
}