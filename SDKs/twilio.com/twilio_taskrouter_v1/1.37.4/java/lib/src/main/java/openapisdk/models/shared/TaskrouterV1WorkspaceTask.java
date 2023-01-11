package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TaskrouterV1WorkspaceTask {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TaskrouterV1WorkspaceTask withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addons")
    public String addons;
    public TaskrouterV1WorkspaceTask withAddons(String addons) {
        this.addons = addons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("age")
    public Long age;
    public TaskrouterV1WorkspaceTask withAge(Long age) {
        this.age = age;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignment_status")
    public TaskEnumStatusEnum assignmentStatus;
    public TaskrouterV1WorkspaceTask withAssignmentStatus(TaskEnumStatusEnum assignmentStatus) {
        this.assignmentStatus = assignmentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public String attributes;
    public TaskrouterV1WorkspaceTask withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public TaskrouterV1WorkspaceTask withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public TaskrouterV1WorkspaceTask withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public TaskrouterV1WorkspaceTask withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public TaskrouterV1WorkspaceTask withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public TaskrouterV1WorkspaceTask withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public TaskrouterV1WorkspaceTask withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_channel_sid")
    public String taskChannelSid;
    public TaskrouterV1WorkspaceTask withTaskChannelSid(String taskChannelSid) {
        this.taskChannelSid = taskChannelSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_channel_unique_name")
    public String taskChannelUniqueName;
    public TaskrouterV1WorkspaceTask withTaskChannelUniqueName(String taskChannelUniqueName) {
        this.taskChannelUniqueName = taskChannelUniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("task_queue_entered_date")
    public OffsetDateTime taskQueueEnteredDate;
    public TaskrouterV1WorkspaceTask withTaskQueueEnteredDate(OffsetDateTime taskQueueEnteredDate) {
        this.taskQueueEnteredDate = taskQueueEnteredDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_queue_friendly_name")
    public String taskQueueFriendlyName;
    public TaskrouterV1WorkspaceTask withTaskQueueFriendlyName(String taskQueueFriendlyName) {
        this.taskQueueFriendlyName = taskQueueFriendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_queue_sid")
    public String taskQueueSid;
    public TaskrouterV1WorkspaceTask withTaskQueueSid(String taskQueueSid) {
        this.taskQueueSid = taskQueueSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public Long timeout;
    public TaskrouterV1WorkspaceTask withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TaskrouterV1WorkspaceTask withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflow_friendly_name")
    public String workflowFriendlyName;
    public TaskrouterV1WorkspaceTask withWorkflowFriendlyName(String workflowFriendlyName) {
        this.workflowFriendlyName = workflowFriendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflow_sid")
    public String workflowSid;
    public TaskrouterV1WorkspaceTask withWorkflowSid(String workflowSid) {
        this.workflowSid = workflowSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace_sid")
    public String workspaceSid;
    public TaskrouterV1WorkspaceTask withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}