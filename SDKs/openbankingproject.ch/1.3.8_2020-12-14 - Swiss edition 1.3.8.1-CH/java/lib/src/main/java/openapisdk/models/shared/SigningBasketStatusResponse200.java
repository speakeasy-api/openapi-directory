package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SigningBasketStatusResponse200 {
    @JsonProperty("transactionStatus")
    public TransactionStatusSbsEnum transactionStatus;
    public SigningBasketStatusResponse200 withTransactionStatus(TransactionStatusSbsEnum transactionStatus) {
        this.transactionStatus = transactionStatus;
        return this;
    }
}