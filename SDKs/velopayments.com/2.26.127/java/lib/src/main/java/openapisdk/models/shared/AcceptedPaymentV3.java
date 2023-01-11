package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AcceptedPaymentV3 {
    @JsonProperty("amount")
    public Long amount;
    public AcceptedPaymentV3 withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("currencyType")
    public String currencyType;
    public AcceptedPaymentV3 withCurrencyType(String currencyType) {
        this.currencyType = currencyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMemo")
    public String paymentMemo;
    public AcceptedPaymentV3 withPaymentMemo(String paymentMemo) {
        this.paymentMemo = paymentMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMetadata")
    public String paymentMetadata;
    public AcceptedPaymentV3 withPaymentMetadata(String paymentMetadata) {
        this.paymentMetadata = paymentMetadata;
        return this;
    }
    @JsonProperty("payorPaymentId")
    public String payorPaymentId;
    public AcceptedPaymentV3 withPayorPaymentId(String payorPaymentId) {
        this.payorPaymentId = payorPaymentId;
        return this;
    }
    @JsonProperty("remoteId")
    public String remoteId;
    public AcceptedPaymentV3 withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteSystemId")
    public String remoteSystemId;
    public AcceptedPaymentV3 withRemoteSystemId(String remoteSystemId) {
        this.remoteSystemId = remoteSystemId;
        return this;
    }
    @JsonProperty("sourceAccountName")
    public String sourceAccountName;
    public AcceptedPaymentV3 withSourceAccountName(String sourceAccountName) {
        this.sourceAccountName = sourceAccountName;
        return this;
    }
}