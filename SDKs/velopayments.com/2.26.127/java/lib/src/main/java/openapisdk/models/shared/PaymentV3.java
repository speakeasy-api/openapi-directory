package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaymentV3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Long amount;
    public PaymentV3 withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public PaymentV3 withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee")
    public PayoutPayeeV3 payee;
    public PaymentV3 withPayee(PayoutPayeeV3 payee) {
        this.payee = payee;
        return this;
    }
    @JsonProperty("paymentId")
    public String paymentId;
    public PaymentV3 withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMemo")
    public String paymentMemo;
    public PaymentV3 withPaymentMemo(String paymentMemo) {
        this.paymentMemo = paymentMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMetadata")
    public String paymentMetadata;
    public PaymentV3 withPaymentMetadata(String paymentMetadata) {
        this.paymentMetadata = paymentMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorPaymentId")
    public String payorPaymentId;
    public PaymentV3 withPayorPaymentId(String payorPaymentId) {
        this.payorPaymentId = payorPaymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteId")
    public String remoteId;
    public PaymentV3 withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteSystemId")
    public String remoteSystemId;
    public PaymentV3 withRemoteSystemId(String remoteSystemId) {
        this.remoteSystemId = remoteSystemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAccountName")
    public String sourceAccountName;
    public PaymentV3 withSourceAccountName(String sourceAccountName) {
        this.sourceAccountName = sourceAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PaymentV3StatusEnum status;
    public PaymentV3 withStatus(PaymentV3StatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transmissionType")
    public TransmissionTypeEnum transmissionType;
    public PaymentV3 withTransmissionType(TransmissionTypeEnum transmissionType) {
        this.transmissionType = transmissionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("withdrawable")
    public Boolean withdrawable;
    public PaymentV3 withWithdrawable(Boolean withdrawable) {
        this.withdrawable = withdrawable;
        return this;
    }
}