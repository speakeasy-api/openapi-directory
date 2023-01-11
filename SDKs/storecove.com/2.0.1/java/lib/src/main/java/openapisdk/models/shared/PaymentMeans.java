package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentMeans
 * A PaymentMeans is a way to pay the invoice.
**/
public class PaymentMeans {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public String account;
    public PaymentMeans withAccount(String account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branche_code")
    public String brancheCode;
    public PaymentMeans withBrancheCode(String brancheCode) {
        this.brancheCode = brancheCode;
        return this;
    }
    @JsonProperty("code")
    public PaymentMeansCodeEnum code;
    public PaymentMeans withCode(PaymentMeansCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holder")
    public String holder;
    public PaymentMeans withHolder(String holder) {
        this.holder = holder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mandate")
    public String mandate;
    public PaymentMeans withMandate(String mandate) {
        this.mandate = mandate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public PaymentMeans withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentId")
    public String paymentId;
    public PaymentMeans withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}