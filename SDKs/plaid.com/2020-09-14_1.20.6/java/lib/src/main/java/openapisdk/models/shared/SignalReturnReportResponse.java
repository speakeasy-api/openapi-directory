package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SignalReturnReportResponse {
    @JsonProperty("request_id")
    public String requestId;
    public SignalReturnReportResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}