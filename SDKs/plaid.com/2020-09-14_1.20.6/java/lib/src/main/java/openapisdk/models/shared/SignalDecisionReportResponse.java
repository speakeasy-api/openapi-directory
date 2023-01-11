package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SignalDecisionReportResponse {
    @JsonProperty("request_id")
    public String requestId;
    public SignalDecisionReportResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}