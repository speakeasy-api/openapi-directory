package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkflowUpdateWorkflowRequest {
    @SpeakeasyMetadata("form:name=AssignmentCallbackUrl")
    public String assignmentCallbackUrl;
    public UpdateWorkflowUpdateWorkflowRequest withAssignmentCallbackUrl(String assignmentCallbackUrl) {
        this.assignmentCallbackUrl = assignmentCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration")
    public String configuration;
    public UpdateWorkflowUpdateWorkflowRequest withConfiguration(String configuration) {
        this.configuration = configuration;
        return this;
    }
    @SpeakeasyMetadata("form:name=FallbackAssignmentCallbackUrl")
    public String fallbackAssignmentCallbackUrl;
    public UpdateWorkflowUpdateWorkflowRequest withFallbackAssignmentCallbackUrl(String fallbackAssignmentCallbackUrl) {
        this.fallbackAssignmentCallbackUrl = fallbackAssignmentCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateWorkflowUpdateWorkflowRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=ReEvaluateTasks")
    public String reEvaluateTasks;
    public UpdateWorkflowUpdateWorkflowRequest withReEvaluateTasks(String reEvaluateTasks) {
        this.reEvaluateTasks = reEvaluateTasks;
        return this;
    }
    @SpeakeasyMetadata("form:name=TaskReservationTimeout")
    public Long taskReservationTimeout;
    public UpdateWorkflowUpdateWorkflowRequest withTaskReservationTimeout(Long taskReservationTimeout) {
        this.taskReservationTimeout = taskReservationTimeout;
        return this;
    }
}