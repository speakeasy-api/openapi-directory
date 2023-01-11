package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListEnvironmentsResponse
 * Response message for EnvironmentService.ListEnvironments.
**/
public class ListEnvironmentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environments")
    public Environment[] environments;
    public ListEnvironmentsResponse withEnvironments(Environment[] environments) {
        this.environments = environments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionId")
    public String executionId;
    public ListEnvironmentsResponse withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("historyId")
    public String historyId;
    public ListEnvironmentsResponse withHistoryId(String historyId) {
        this.historyId = historyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListEnvironmentsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public ListEnvironmentsResponse withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}