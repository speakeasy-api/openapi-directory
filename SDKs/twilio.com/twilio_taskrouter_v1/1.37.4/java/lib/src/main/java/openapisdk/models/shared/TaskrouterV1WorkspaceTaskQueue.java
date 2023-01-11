package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TaskrouterV1WorkspaceTaskQueue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TaskrouterV1WorkspaceTaskQueue withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignment_activity_name")
    public String assignmentActivityName;
    public TaskrouterV1WorkspaceTaskQueue withAssignmentActivityName(String assignmentActivityName) {
        this.assignmentActivityName = assignmentActivityName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignment_activity_sid")
    public String assignmentActivitySid;
    public TaskrouterV1WorkspaceTaskQueue withAssignmentActivitySid(String assignmentActivitySid) {
        this.assignmentActivitySid = assignmentActivitySid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public TaskrouterV1WorkspaceTaskQueue withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public TaskrouterV1WorkspaceTaskQueue withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public TaskrouterV1WorkspaceTaskQueue withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public TaskrouterV1WorkspaceTaskQueue withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_reserved_workers")
    public Long maxReservedWorkers;
    public TaskrouterV1WorkspaceTaskQueue withMaxReservedWorkers(Long maxReservedWorkers) {
        this.maxReservedWorkers = maxReservedWorkers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservation_activity_name")
    public String reservationActivityName;
    public TaskrouterV1WorkspaceTaskQueue withReservationActivityName(String reservationActivityName) {
        this.reservationActivityName = reservationActivityName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservation_activity_sid")
    public String reservationActivitySid;
    public TaskrouterV1WorkspaceTaskQueue withReservationActivitySid(String reservationActivitySid) {
        this.reservationActivitySid = reservationActivitySid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public TaskrouterV1WorkspaceTaskQueue withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_workers")
    public String targetWorkers;
    public TaskrouterV1WorkspaceTaskQueue withTargetWorkers(String targetWorkers) {
        this.targetWorkers = targetWorkers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_order")
    public TaskQueueEnumTaskOrderEnum taskOrder;
    public TaskrouterV1WorkspaceTaskQueue withTaskOrder(TaskQueueEnumTaskOrderEnum taskOrder) {
        this.taskOrder = taskOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TaskrouterV1WorkspaceTaskQueue withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace_sid")
    public String workspaceSid;
    public TaskrouterV1WorkspaceTaskQueue withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}