package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyAssignment
 * OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
**/
public class OsPolicyAssignment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseline")
    public Boolean baseline;
    public OsPolicyAssignment withBaseline(Boolean baseline) {
        this.baseline = baseline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public OsPolicyAssignment withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OsPolicyAssignment withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public OsPolicyAssignment withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceFilter")
    public OsPolicyAssignmentInstanceFilter instanceFilter;
    public OsPolicyAssignment withInstanceFilter(OsPolicyAssignmentInstanceFilter instanceFilter) {
        this.instanceFilter = instanceFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OsPolicyAssignment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osPolicies")
    public OsPolicy[] osPolicies;
    public OsPolicyAssignment withOsPolicies(OsPolicy[] osPolicies) {
        this.osPolicies = osPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reconciling")
    public Boolean reconciling;
    public OsPolicyAssignment withReconciling(Boolean reconciling) {
        this.reconciling = reconciling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionCreateTime")
    public String revisionCreateTime;
    public OsPolicyAssignment withRevisionCreateTime(String revisionCreateTime) {
        this.revisionCreateTime = revisionCreateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public OsPolicyAssignment withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rollout")
    public OsPolicyAssignmentRollout rollout;
    public OsPolicyAssignment withRollout(OsPolicyAssignmentRollout rollout) {
        this.rollout = rollout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rolloutState")
    public OsPolicyAssignmentRolloutStateEnum rolloutState;
    public OsPolicyAssignment withRolloutState(OsPolicyAssignmentRolloutStateEnum rolloutState) {
        this.rolloutState = rolloutState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public OsPolicyAssignment withUid(String uid) {
        this.uid = uid;
        return this;
    }
}