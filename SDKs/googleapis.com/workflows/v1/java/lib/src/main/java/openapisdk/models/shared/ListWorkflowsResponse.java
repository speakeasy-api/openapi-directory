package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListWorkflowsResponse
 * Response for the ListWorkflows method.
**/
public class ListWorkflowsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListWorkflowsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListWorkflowsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflows")
    public Workflow[] workflows;
    public ListWorkflowsResponse withWorkflows(Workflow[] workflows) {
        this.workflows = workflows;
        return this;
    }
}