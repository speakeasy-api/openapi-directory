package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskUpdateTaskRequest {
    @SpeakeasyMetadata("form:name=AssignmentStatus")
    public openapisdk.models.shared.TaskEnumStatusEnum assignmentStatus;
    public UpdateTaskUpdateTaskRequest withAssignmentStatus(openapisdk.models.shared.TaskEnumStatusEnum assignmentStatus) {
        this.assignmentStatus = assignmentStatus;
        return this;
    }
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public UpdateTaskUpdateTaskRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=Priority")
    public Long priority;
    public UpdateTaskUpdateTaskRequest withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @SpeakeasyMetadata("form:name=Reason")
    public String reason;
    public UpdateTaskUpdateTaskRequest withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @SpeakeasyMetadata("form:name=TaskChannel")
    public String taskChannel;
    public UpdateTaskUpdateTaskRequest withTaskChannel(String taskChannel) {
        this.taskChannel = taskChannel;
        return this;
    }
}