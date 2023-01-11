package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListExecutionsResponse
 * Response for the ListExecutions method.
**/
public class ListExecutionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executions")
    public Execution[] executions;
    public ListExecutionsResponse withExecutions(Execution[] executions) {
        this.executions = executions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListExecutionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}