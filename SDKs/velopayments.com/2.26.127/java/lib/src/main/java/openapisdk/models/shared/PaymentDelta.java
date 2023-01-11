package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaymentDelta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentAmount")
    public Long paymentAmount;
    public PaymentDelta withPaymentAmount(Long paymentAmount) {
        this.paymentAmount = paymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentCurrency")
    public String paymentCurrency;
    public PaymentDelta withPaymentCurrency(String paymentCurrency) {
        this.paymentCurrency = paymentCurrency;
        return this;
    }
    @JsonProperty("paymentId")
    public String paymentId;
    public PaymentDelta withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorPaymentId")
    public String payorPaymentId;
    public PaymentDelta withPayorPaymentId(String payorPaymentId) {
        this.payorPaymentId = payorPaymentId;
        return this;
    }
    @JsonProperty("payoutId")
    public String payoutId;
    public PaymentDelta withPayoutId(String payoutId) {
        this.payoutId = payoutId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAmount")
    public Long sourceAmount;
    public PaymentDelta withSourceAmount(Long sourceAmount) {
        this.sourceAmount = sourceAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceCurrency")
    public String sourceCurrency;
    public PaymentDelta withSourceCurrency(String sourceCurrency) {
        this.sourceCurrency = sourceCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public PaymentDelta withStatus(String status) {
        this.status = status;
        return this;
    }
}