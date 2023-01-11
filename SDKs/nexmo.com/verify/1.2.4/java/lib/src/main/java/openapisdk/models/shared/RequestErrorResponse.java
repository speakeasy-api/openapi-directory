package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RequestErrorResponse
 * Error
**/
public class RequestErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_text")
    public String errorText;
    public RequestErrorResponse withErrorText(String errorText) {
        this.errorText = errorText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public RequestErrorResponse withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public RequestErrorResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public RequestErrorResponseStatusEnum status;
    public RequestErrorResponse withStatus(RequestErrorResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}