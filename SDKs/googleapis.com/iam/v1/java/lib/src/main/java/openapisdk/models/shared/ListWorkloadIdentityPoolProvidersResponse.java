package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListWorkloadIdentityPoolProvidersResponse
 * Response message for ListWorkloadIdentityPoolProviders.
**/
public class ListWorkloadIdentityPoolProvidersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListWorkloadIdentityPoolProvidersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workloadIdentityPoolProviders")
    public WorkloadIdentityPoolProvider[] workloadIdentityPoolProviders;
    public ListWorkloadIdentityPoolProvidersResponse withWorkloadIdentityPoolProviders(WorkloadIdentityPoolProvider[] workloadIdentityPoolProviders) {
        this.workloadIdentityPoolProviders = workloadIdentityPoolProviders;
        return this;
    }
}