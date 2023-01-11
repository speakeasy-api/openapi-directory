package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListApiDeploymentsResponse
 * Response message for ListApiDeployments.
**/
public class ListApiDeploymentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiDeployments")
    public ApiDeployment[] apiDeployments;
    public ListApiDeploymentsResponse withApiDeployments(ApiDeployment[] apiDeployments) {
        this.apiDeployments = apiDeployments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListApiDeploymentsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}