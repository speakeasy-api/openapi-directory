package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransactionsRefreshResponse
 * TransactionsRefreshResponse defines the response schema for `/transactions/refresh`
**/
public class TransactionsRefreshResponse {
    @JsonProperty("request_id")
    public String requestId;
    public TransactionsRefreshResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}