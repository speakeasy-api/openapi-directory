package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatchJobInstanceDetailsSummary
 * A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance.
**/
public class PatchJobInstanceDetailsSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ackedInstanceCount")
    public String ackedInstanceCount;
    public PatchJobInstanceDetailsSummary withAckedInstanceCount(String ackedInstanceCount) {
        this.ackedInstanceCount = ackedInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyingPatchesInstanceCount")
    public String applyingPatchesInstanceCount;
    public PatchJobInstanceDetailsSummary withApplyingPatchesInstanceCount(String applyingPatchesInstanceCount) {
        this.applyingPatchesInstanceCount = applyingPatchesInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadingPatchesInstanceCount")
    public String downloadingPatchesInstanceCount;
    public PatchJobInstanceDetailsSummary withDownloadingPatchesInstanceCount(String downloadingPatchesInstanceCount) {
        this.downloadingPatchesInstanceCount = downloadingPatchesInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedInstanceCount")
    public String failedInstanceCount;
    public PatchJobInstanceDetailsSummary withFailedInstanceCount(String failedInstanceCount) {
        this.failedInstanceCount = failedInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inactiveInstanceCount")
    public String inactiveInstanceCount;
    public PatchJobInstanceDetailsSummary withInactiveInstanceCount(String inactiveInstanceCount) {
        this.inactiveInstanceCount = inactiveInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noAgentDetectedInstanceCount")
    public String noAgentDetectedInstanceCount;
    public PatchJobInstanceDetailsSummary withNoAgentDetectedInstanceCount(String noAgentDetectedInstanceCount) {
        this.noAgentDetectedInstanceCount = noAgentDetectedInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifiedInstanceCount")
    public String notifiedInstanceCount;
    public PatchJobInstanceDetailsSummary withNotifiedInstanceCount(String notifiedInstanceCount) {
        this.notifiedInstanceCount = notifiedInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingInstanceCount")
    public String pendingInstanceCount;
    public PatchJobInstanceDetailsSummary withPendingInstanceCount(String pendingInstanceCount) {
        this.pendingInstanceCount = pendingInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postPatchStepInstanceCount")
    public String postPatchStepInstanceCount;
    public PatchJobInstanceDetailsSummary withPostPatchStepInstanceCount(String postPatchStepInstanceCount) {
        this.postPatchStepInstanceCount = postPatchStepInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prePatchStepInstanceCount")
    public String prePatchStepInstanceCount;
    public PatchJobInstanceDetailsSummary withPrePatchStepInstanceCount(String prePatchStepInstanceCount) {
        this.prePatchStepInstanceCount = prePatchStepInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rebootingInstanceCount")
    public String rebootingInstanceCount;
    public PatchJobInstanceDetailsSummary withRebootingInstanceCount(String rebootingInstanceCount) {
        this.rebootingInstanceCount = rebootingInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startedInstanceCount")
    public String startedInstanceCount;
    public PatchJobInstanceDetailsSummary withStartedInstanceCount(String startedInstanceCount) {
        this.startedInstanceCount = startedInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("succeededInstanceCount")
    public String succeededInstanceCount;
    public PatchJobInstanceDetailsSummary withSucceededInstanceCount(String succeededInstanceCount) {
        this.succeededInstanceCount = succeededInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("succeededRebootRequiredInstanceCount")
    public String succeededRebootRequiredInstanceCount;
    public PatchJobInstanceDetailsSummary withSucceededRebootRequiredInstanceCount(String succeededRebootRequiredInstanceCount) {
        this.succeededRebootRequiredInstanceCount = succeededRebootRequiredInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timedOutInstanceCount")
    public String timedOutInstanceCount;
    public PatchJobInstanceDetailsSummary withTimedOutInstanceCount(String timedOutInstanceCount) {
        this.timedOutInstanceCount = timedOutInstanceCount;
        return this;
    }
}