package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentInstructionV3
 * Instruction for creating a payment
**/
public class PaymentInstructionV3 {
    @JsonProperty("amount")
    public Long amount;
    public PaymentInstructionV3 withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("currency")
    public String currency;
    public PaymentInstructionV3 withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMemo")
    public String paymentMemo;
    public PaymentInstructionV3 withPaymentMemo(String paymentMemo) {
        this.paymentMemo = paymentMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMetadata")
    public String paymentMetadata;
    public PaymentInstructionV3 withPaymentMetadata(String paymentMetadata) {
        this.paymentMetadata = paymentMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorPaymentId")
    public String payorPaymentId;
    public PaymentInstructionV3 withPayorPaymentId(String payorPaymentId) {
        this.payorPaymentId = payorPaymentId;
        return this;
    }
    @JsonProperty("remoteId")
    public String remoteId;
    public PaymentInstructionV3 withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteSystemId")
    public String remoteSystemId;
    public PaymentInstructionV3 withRemoteSystemId(String remoteSystemId) {
        this.remoteSystemId = remoteSystemId;
        return this;
    }
    @JsonProperty("sourceAccountName")
    public String sourceAccountName;
    public PaymentInstructionV3 withSourceAccountName(String sourceAccountName) {
        this.sourceAccountName = sourceAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transmissionType")
    public TransmissionTypeEnum transmissionType;
    public PaymentInstructionV3 withTransmissionType(TransmissionTypeEnum transmissionType) {
        this.transmissionType = transmissionType;
        return this;
    }
}