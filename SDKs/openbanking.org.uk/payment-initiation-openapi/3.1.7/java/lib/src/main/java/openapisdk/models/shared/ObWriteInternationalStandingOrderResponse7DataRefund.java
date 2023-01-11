package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteInternationalStandingOrderResponse7DataRefund {
    @JsonProperty("Account")
    public ObWriteInternationalStandingOrderResponse7DataRefundAccount account;
    public ObWriteInternationalStandingOrderResponse7DataRefund withAccount(ObWriteInternationalStandingOrderResponse7DataRefundAccount account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Agent")
    public ObWriteInternationalStandingOrderResponse7DataRefundAgent agent;
    public ObWriteInternationalStandingOrderResponse7DataRefund withAgent(ObWriteInternationalStandingOrderResponse7DataRefundAgent agent) {
        this.agent = agent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Creditor")
    public ObWriteInternationalStandingOrderResponse7DataRefundCreditor creditor;
    public ObWriteInternationalStandingOrderResponse7DataRefund withCreditor(ObWriteInternationalStandingOrderResponse7DataRefundCreditor creditor) {
        this.creditor = creditor;
        return this;
    }
}