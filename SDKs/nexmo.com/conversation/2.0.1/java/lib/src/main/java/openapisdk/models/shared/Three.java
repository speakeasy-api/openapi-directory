package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Three
 * Connect to a Websocket
**/
public class Three {
    @JsonProperty("content-type")
    public ThreeContentTypeEnum contentType;
    public Three withContentType(ThreeContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public ThreeHeaders headers;
    public Three withHeaders(ThreeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Three withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public Three withUri(String uri) {
        this.uri = uri;
        return this;
    }
}