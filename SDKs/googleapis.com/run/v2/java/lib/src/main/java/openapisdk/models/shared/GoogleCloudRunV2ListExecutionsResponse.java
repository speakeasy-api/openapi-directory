package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2ListExecutionsResponse
 * Response message containing a list of Executions.
**/
public class GoogleCloudRunV2ListExecutionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executions")
    public GoogleCloudRunV2Execution[] executions;
    public GoogleCloudRunV2ListExecutionsResponse withExecutions(GoogleCloudRunV2Execution[] executions) {
        this.executions = executions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudRunV2ListExecutionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}