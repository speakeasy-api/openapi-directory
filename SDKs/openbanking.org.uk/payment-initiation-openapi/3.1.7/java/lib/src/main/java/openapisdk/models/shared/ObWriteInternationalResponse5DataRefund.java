package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteInternationalResponse5DataRefund {
    @JsonProperty("Account")
    public ObWriteInternationalResponse5DataRefundAccount account;
    public ObWriteInternationalResponse5DataRefund withAccount(ObWriteInternationalResponse5DataRefundAccount account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Agent")
    public ObWriteInternationalResponse5DataRefundAgent agent;
    public ObWriteInternationalResponse5DataRefund withAgent(ObWriteInternationalResponse5DataRefundAgent agent) {
        this.agent = agent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Creditor")
    public ObWriteInternationalResponse5DataRefundCreditor creditor;
    public ObWriteInternationalResponse5DataRefund withCreditor(ObWriteInternationalResponse5DataRefundCreditor creditor) {
        this.creditor = creditor;
        return this;
    }
}