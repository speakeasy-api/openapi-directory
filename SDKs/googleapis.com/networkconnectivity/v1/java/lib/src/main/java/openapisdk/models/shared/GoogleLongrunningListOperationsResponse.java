package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleLongrunningListOperationsResponse
 * The response message for Operations.ListOperations.
**/
public class GoogleLongrunningListOperationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleLongrunningListOperationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public GoogleLongrunningOperation[] operations;
    public GoogleLongrunningListOperationsResponse withOperations(GoogleLongrunningOperation[] operations) {
        this.operations = operations;
        return this;
    }
}