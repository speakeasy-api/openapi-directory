package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkflowCreateWorkflowRequest {
    @SpeakeasyMetadata("form:name=AssignmentCallbackUrl")
    public String assignmentCallbackUrl;
    public CreateWorkflowCreateWorkflowRequest withAssignmentCallbackUrl(String assignmentCallbackUrl) {
        this.assignmentCallbackUrl = assignmentCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration")
    public String configuration;
    public CreateWorkflowCreateWorkflowRequest withConfiguration(String configuration) {
        this.configuration = configuration;
        return this;
    }
    @SpeakeasyMetadata("form:name=FallbackAssignmentCallbackUrl")
    public String fallbackAssignmentCallbackUrl;
    public CreateWorkflowCreateWorkflowRequest withFallbackAssignmentCallbackUrl(String fallbackAssignmentCallbackUrl) {
        this.fallbackAssignmentCallbackUrl = fallbackAssignmentCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateWorkflowCreateWorkflowRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=TaskReservationTimeout")
    public Long taskReservationTimeout;
    public CreateWorkflowCreateWorkflowRequest withTaskReservationTimeout(Long taskReservationTimeout) {
        this.taskReservationTimeout = taskReservationTimeout;
        return this;
    }
}