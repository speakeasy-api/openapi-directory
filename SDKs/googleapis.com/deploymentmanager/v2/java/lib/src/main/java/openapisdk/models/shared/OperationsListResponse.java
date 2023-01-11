package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OperationsListResponse
 * A response containing a partial list of operations and a page token used to build the next request if the request has been truncated.
**/
public class OperationsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public OperationsListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public Operation[] operations;
    public OperationsListResponse withOperations(Operation[] operations) {
        this.operations = operations;
        return this;
    }
}