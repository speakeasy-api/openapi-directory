package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteInternationalScheduledResponse6DataRefund {
    @JsonProperty("Account")
    public ObWriteInternationalScheduledResponse6DataRefundAccount account;
    public ObWriteInternationalScheduledResponse6DataRefund withAccount(ObWriteInternationalScheduledResponse6DataRefundAccount account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Agent")
    public ObWriteInternationalScheduledResponse6DataRefundAgent agent;
    public ObWriteInternationalScheduledResponse6DataRefund withAgent(ObWriteInternationalScheduledResponse6DataRefundAgent agent) {
        this.agent = agent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Creditor")
    public ObWriteInternationalScheduledResponse6DataRefundCreditor creditor;
    public ObWriteInternationalScheduledResponse6DataRefund withCreditor(ObWriteInternationalScheduledResponse6DataRefundCreditor creditor) {
        this.creditor = creditor;
        return this;
    }
}