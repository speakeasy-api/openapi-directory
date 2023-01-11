package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPatchDeploymentsResponse
 * A response message for listing patch deployments.
**/
public class ListPatchDeploymentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListPatchDeploymentsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patchDeployments")
    public PatchDeployment[] patchDeployments;
    public ListPatchDeploymentsResponse withPatchDeployments(PatchDeployment[] patchDeployments) {
        this.patchDeployments = patchDeployments;
        return this;
    }
}