package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayListOperationsResponse
 * The response message for Operations.ListOperations.
**/
public class ApigatewayListOperationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ApigatewayListOperationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public ApigatewayOperation[] operations;
    public ApigatewayListOperationsResponse withOperations(ApigatewayOperation[] operations) {
        this.operations = operations;
        return this;
    }
}