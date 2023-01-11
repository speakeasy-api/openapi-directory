package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListTransactionsResponse
 * Successful response to get all transactions. This returns a paginated
 * list of transactions, which can be scrolled by following the `prev` and
 * `next` links if present.
 * 
**/
public class ListTransactionsResponse {
    @JsonProperty("data")
    public TransactionResource[] data;
    public ListTransactionsResponse withData(TransactionResource[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("links")
    public ListTransactionsResponseLinks links;
    public ListTransactionsResponse withLinks(ListTransactionsResponseLinks links) {
        this.links = links;
        return this;
    }
}