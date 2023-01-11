package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InitializeHubResponse
 * Response message for the InitializeHub method.
**/
public class InitializeHubResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceIdentity")
    public String serviceIdentity;
    public InitializeHubResponse withServiceIdentity(String serviceIdentity) {
        this.serviceIdentity = serviceIdentity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workloadIdentityPool")
    public String workloadIdentityPool;
    public InitializeHubResponse withWorkloadIdentityPool(String workloadIdentityPool) {
        this.workloadIdentityPool = workloadIdentityPool;
        return this;
    }
}