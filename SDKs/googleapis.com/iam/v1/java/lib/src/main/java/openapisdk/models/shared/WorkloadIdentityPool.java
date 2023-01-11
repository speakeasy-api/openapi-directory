package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkloadIdentityPool
 * Represents a collection of external workload identities. You can define IAM policies to grant these identities access to Google Cloud resources.
**/
public class WorkloadIdentityPool {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WorkloadIdentityPool withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public WorkloadIdentityPool withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public WorkloadIdentityPool withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WorkloadIdentityPool withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public WorkloadIdentityPoolStateEnum state;
    public WorkloadIdentityPool withState(WorkloadIdentityPoolStateEnum state) {
        this.state = state;
        return this;
    }
}