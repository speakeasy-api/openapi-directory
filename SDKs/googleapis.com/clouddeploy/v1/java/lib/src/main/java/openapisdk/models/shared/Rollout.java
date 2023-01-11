package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Rollout
 * A `Rollout` resource in the Google Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`.
**/
public class Rollout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public Rollout withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalState")
    public RolloutApprovalStateEnum approvalState;
    public Rollout withApprovalState(RolloutApprovalStateEnum approvalState) {
        this.approvalState = approvalState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approveTime")
    public String approveTime;
    public Rollout withApproveTime(String approveTime) {
        this.approveTime = approveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Rollout withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployEndTime")
    public String deployEndTime;
    public Rollout withDeployEndTime(String deployEndTime) {
        this.deployEndTime = deployEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployFailureCause")
    public RolloutDeployFailureCauseEnum deployFailureCause;
    public Rollout withDeployFailureCause(RolloutDeployFailureCauseEnum deployFailureCause) {
        this.deployFailureCause = deployFailureCause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployStartTime")
    public String deployStartTime;
    public Rollout withDeployStartTime(String deployStartTime) {
        this.deployStartTime = deployStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployingBuild")
    public String deployingBuild;
    public Rollout withDeployingBuild(String deployingBuild) {
        this.deployingBuild = deployingBuild;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Rollout withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enqueueTime")
    public String enqueueTime;
    public Rollout withEnqueueTime(String enqueueTime) {
        this.enqueueTime = enqueueTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Rollout withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public String failureReason;
    public Rollout withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Rollout withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public Metadata metadata;
    public Rollout withMetadata(Metadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Rollout withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phases")
    public Phase[] phases;
    public Rollout withPhases(Phase[] phases) {
        this.phases = phases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public RolloutStateEnum state;
    public Rollout withState(RolloutStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetId")
    public String targetId;
    public Rollout withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public Rollout withUid(String uid) {
        this.uid = uid;
        return this;
    }
}