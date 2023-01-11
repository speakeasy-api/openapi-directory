package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetTransactionResponse
 * Successful response to get a single transaction.
 * 
**/
public class GetTransactionResponse {
    @JsonProperty("data")
    public TransactionResource data;
    public GetTransactionResponse withData(TransactionResource data) {
        this.data = data;
        return this;
    }
}