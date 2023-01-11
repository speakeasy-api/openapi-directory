package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeploymentsListResponse
 * A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated.
**/
public class DeploymentsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployments")
    public Deployment[] deployments;
    public DeploymentsListResponse withDeployments(Deployment[] deployments) {
        this.deployments = deployments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public DeploymentsListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}