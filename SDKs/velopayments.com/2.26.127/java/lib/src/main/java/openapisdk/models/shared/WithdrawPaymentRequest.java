package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WithdrawPaymentRequest {
    @JsonProperty("reason")
    public String reason;
    public WithdrawPaymentRequest withReason(String reason) {
        this.reason = reason;
        return this;
    }
}