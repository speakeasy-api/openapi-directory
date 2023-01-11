package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransactionDetailsBody
 * Transaction details.
**/
public class TransactionDetailsBody {
    @JsonProperty("transactionDetails")
    public Transactions transactionDetails;
    public TransactionDetailsBody withTransactionDetails(Transactions transactionDetails) {
        this.transactionDetails = transactionDetails;
        return this;
    }
}