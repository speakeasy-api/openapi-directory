package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePayoutRequestV3 {
    @JsonProperty("payments")
    public PaymentInstructionV3[] payments;
    public CreatePayoutRequestV3 withPayments(PaymentInstructionV3[] payments) {
        this.payments = payments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutFromPayorId")
    public String payoutFromPayorId;
    public CreatePayoutRequestV3 withPayoutFromPayorId(String payoutFromPayorId) {
        this.payoutFromPayorId = payoutFromPayorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutMemo")
    public String payoutMemo;
    public CreatePayoutRequestV3 withPayoutMemo(String payoutMemo) {
        this.payoutMemo = payoutMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutToPayorId")
    public String payoutToPayorId;
    public CreatePayoutRequestV3 withPayoutToPayorId(String payoutToPayorId) {
        this.payoutToPayorId = payoutToPayorId;
        return this;
    }
}