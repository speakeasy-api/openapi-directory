package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ApplicationGetResponse
 * The request ID associated with this call.
**/
public class ApplicationGetResponse {
    @JsonProperty("application")
    public Application application;
    public ApplicationGetResponse withApplication(Application application) {
        this.application = application;
        return this;
    }
    @JsonProperty("request_id")
    public String requestId;
    public ApplicationGetResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}