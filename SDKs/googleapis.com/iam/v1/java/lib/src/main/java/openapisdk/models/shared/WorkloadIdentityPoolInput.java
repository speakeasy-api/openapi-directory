package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkloadIdentityPoolInput
 * Represents a collection of external workload identities. You can define IAM policies to grant these identities access to Google Cloud resources.
**/
public class WorkloadIdentityPoolInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WorkloadIdentityPoolInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public WorkloadIdentityPoolInput withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public WorkloadIdentityPoolInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}