package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTransactionDetails200ApplicationJson {
    @JsonProperty("transactionsDetails")
    public openapisdk.models.shared.TransactionDetailsBody transactionsDetails;
    public GetTransactionDetails200ApplicationJson withTransactionsDetails(openapisdk.models.shared.TransactionDetailsBody transactionsDetails) {
        this.transactionsDetails = transactionsDetails;
        return this;
    }
}