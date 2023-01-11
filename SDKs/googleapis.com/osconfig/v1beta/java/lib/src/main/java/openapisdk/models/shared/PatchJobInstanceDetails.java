package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatchJobInstanceDetails
 * Patch details for a VM instance. For more information about reviewing VM instance details, see [Listing all VM instance details for a specific patch job](https://cloud.google.com/compute/docs/os-patch-management/manage-patch-jobs#list-instance-details).
**/
public class PatchJobInstanceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attemptCount")
    public String attemptCount;
    public PatchJobInstanceDetails withAttemptCount(String attemptCount) {
        this.attemptCount = attemptCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public String failureReason;
    public PatchJobInstanceDetails withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceSystemId")
    public String instanceSystemId;
    public PatchJobInstanceDetails withInstanceSystemId(String instanceSystemId) {
        this.instanceSystemId = instanceSystemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PatchJobInstanceDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public PatchJobInstanceDetailsStateEnum state;
    public PatchJobInstanceDetails withState(PatchJobInstanceDetailsStateEnum state) {
        this.state = state;
        return this;
    }
}