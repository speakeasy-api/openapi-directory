package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RequestReference {
    @JsonProperty("requestId")
    public String requestId;
    public RequestReference withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}