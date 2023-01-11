package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointWebsocket
 * Connect to a Websocket
**/
public class EndpointWebsocket {
    @JsonProperty("content-type")
    public EndpointWebsocketContentTypeEnum contentType;
    public EndpointWebsocket withContentType(EndpointWebsocketContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public EndpointWebsocketHeaders headers;
    public EndpointWebsocket withHeaders(EndpointWebsocketHeaders headers) {
        this.headers = headers;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public EndpointWebsocket withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public EndpointWebsocket withUri(String uri) {
        this.uri = uri;
        return this;
    }
}