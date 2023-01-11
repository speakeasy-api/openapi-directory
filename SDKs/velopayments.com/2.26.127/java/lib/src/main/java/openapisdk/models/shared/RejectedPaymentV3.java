package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RejectedPaymentV3 {
    @JsonProperty("amount")
    public Long amount;
    public RejectedPaymentV3 withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("currencyType")
    public String currencyType;
    public RejectedPaymentV3 withCurrencyType(String currencyType) {
        this.currencyType = currencyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineNumber")
    public Long lineNumber;
    public RejectedPaymentV3 withLineNumber(Long lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public RejectedPaymentV3 withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMetadata")
    public String paymentMetadata;
    public RejectedPaymentV3 withPaymentMetadata(String paymentMetadata) {
        this.paymentMetadata = paymentMetadata;
        return this;
    }
    @JsonProperty("payorPaymentId")
    public String payorPaymentId;
    public RejectedPaymentV3 withPayorPaymentId(String payorPaymentId) {
        this.payorPaymentId = payorPaymentId;
        return this;
    }
    @JsonProperty("reason")
    public String reason;
    public RejectedPaymentV3 withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonCode")
    public String reasonCode;
    public RejectedPaymentV3 withReasonCode(String reasonCode) {
        this.reasonCode = reasonCode;
        return this;
    }
    @JsonProperty("remoteId")
    public String remoteId;
    public RejectedPaymentV3 withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteSystemId")
    public String remoteSystemId;
    public RejectedPaymentV3 withRemoteSystemId(String remoteSystemId) {
        this.remoteSystemId = remoteSystemId;
        return this;
    }
    @JsonProperty("sourceAccountName")
    public String sourceAccountName;
    public RejectedPaymentV3 withSourceAccountName(String sourceAccountName) {
        this.sourceAccountName = sourceAccountName;
        return this;
    }
}