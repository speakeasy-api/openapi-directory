package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyAssignmentInput
 * OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information about the OS policy resource definitions and examples, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
**/
public class OsPolicyAssignmentInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OsPolicyAssignmentInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public OsPolicyAssignmentInput withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceFilter")
    public OsPolicyAssignmentInstanceFilter instanceFilter;
    public OsPolicyAssignmentInput withInstanceFilter(OsPolicyAssignmentInstanceFilter instanceFilter) {
        this.instanceFilter = instanceFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OsPolicyAssignmentInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osPolicies")
    public OsPolicy[] osPolicies;
    public OsPolicyAssignmentInput withOsPolicies(OsPolicy[] osPolicies) {
        this.osPolicies = osPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rollout")
    public OsPolicyAssignmentRollout rollout;
    public OsPolicyAssignmentInput withRollout(OsPolicyAssignmentRollout rollout) {
        this.rollout = rollout;
        return this;
    }
}