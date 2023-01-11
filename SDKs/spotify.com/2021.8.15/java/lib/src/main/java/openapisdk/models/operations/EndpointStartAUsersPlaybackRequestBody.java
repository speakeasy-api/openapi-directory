package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EndpointStartAUsersPlaybackRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context_uri")
    public String contextUri;
    public EndpointStartAUsersPlaybackRequestBody withContextUri(String contextUri) {
        this.contextUri = contextUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public java.util.Map<String, Object> offset;
    public EndpointStartAUsersPlaybackRequestBody withOffset(java.util.Map<String, Object> offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position_ms")
    public Integer positionMs;
    public EndpointStartAUsersPlaybackRequestBody withPositionMs(Integer positionMs) {
        this.positionMs = positionMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uris")
    public String[] uris;
    public EndpointStartAUsersPlaybackRequestBody withUris(String[] uris) {
        this.uris = uris;
        return this;
    }
}