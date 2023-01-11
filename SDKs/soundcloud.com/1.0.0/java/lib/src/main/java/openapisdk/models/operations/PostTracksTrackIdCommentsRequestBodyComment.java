package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostTracksTrackIdCommentsRequestBodyComment {
    @JsonProperty("body")
    public String body;
    public PostTracksTrackIdCommentsRequestBodyComment withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public Object timestamp;
    public PostTracksTrackIdCommentsRequestBodyComment withTimestamp(Object timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}