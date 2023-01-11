package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTaskCreateTaskRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public CreateTaskCreateTaskRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=Priority")
    public Long priority;
    public CreateTaskCreateTaskRequest withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @SpeakeasyMetadata("form:name=TaskChannel")
    public String taskChannel;
    public CreateTaskCreateTaskRequest withTaskChannel(String taskChannel) {
        this.taskChannel = taskChannel;
        return this;
    }
    @SpeakeasyMetadata("form:name=Timeout")
    public Long timeout;
    public CreateTaskCreateTaskRequest withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=WorkflowSid")
    public String workflowSid;
    public CreateTaskCreateTaskRequest withWorkflowSid(String workflowSid) {
        this.workflowSid = workflowSid;
        return this;
    }
}