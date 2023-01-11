package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCalls202ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Call")
    public String call;
    public PostCalls202ApplicationJson withCall(String call) {
        this.call = call;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public String location;
    public PostCalls202ApplicationJson withLocation(String location) {
        this.location = location;
        return this;
    }
}