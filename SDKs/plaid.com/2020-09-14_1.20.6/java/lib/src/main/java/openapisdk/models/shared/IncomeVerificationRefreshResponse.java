package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IncomeVerificationRefreshResponse
 * IncomeVerificationRequestResponse defines the response schema for `/income/verification/refresh`
**/
public class IncomeVerificationRefreshResponse {
    @JsonProperty("request_id")
    public String requestId;
    public IncomeVerificationRefreshResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("verification_refresh_status")
    public VerificationRefreshStatusEnum verificationRefreshStatus;
    public IncomeVerificationRefreshResponse withVerificationRefreshStatus(VerificationRefreshStatusEnum verificationRefreshStatus) {
        this.verificationRefreshStatus = verificationRefreshStatus;
        return this;
    }
}