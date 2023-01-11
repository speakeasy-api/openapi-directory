package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalListDeploymentsResponse
 * Response for ListDeployments.
**/
public class SasPortalListDeploymentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployments")
    public SasPortalDeployment[] deployments;
    public SasPortalListDeploymentsResponse withDeployments(SasPortalDeployment[] deployments) {
        this.deployments = deployments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SasPortalListDeploymentsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}