package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TaskrouterV1WorkspaceWorkerWorkerChannel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TaskrouterV1WorkspaceWorkerWorkerChannel withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assigned_tasks")
    public Long assignedTasks;
    public TaskrouterV1WorkspaceWorkerWorkerChannel withAssignedTasks(Long assignedTasks) {
        this.assignedTasks = assignedTasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available")
    public Boolean available;
    public TaskrouterV1WorkspaceWorkerWorkerChannel withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_capacity_percentage")
    public Long availableCapacityPercentage;
    public TaskrouterV1WorkspaceWorkerWorkerChannel withAvailableCapacityPercentage(Long availableCapacityPercentage) {
        this.availableCapacityPercentage = availableCapacityPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configured_capacity")
    public Long configuredCapacity;
    public TaskrouterV1WorkspaceWorkerWorkerChannel withConfiguredCapacity(Long configuredCapacity) {
        this.configuredCapacity = configuredCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public TaskrouterV1WorkspaceWorkerWorkerChannel withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public TaskrouterV1WorkspaceWorkerWorkerChannel withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public TaskrouterV1WorkspaceWorkerWorkerChannel withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_channel_sid")
    public String taskChannelSid;
    public TaskrouterV1WorkspaceWorkerWorkerChannel withTaskChannelSid(String taskChannelSid) {
        this.taskChannelSid = taskChannelSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_channel_unique_name")
    public String taskChannelUniqueName;
    public TaskrouterV1WorkspaceWorkerWorkerChannel withTaskChannelUniqueName(String taskChannelUniqueName) {
        this.taskChannelUniqueName = taskChannelUniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TaskrouterV1WorkspaceWorkerWorkerChannel withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("worker_sid")
    public String workerSid;
    public TaskrouterV1WorkspaceWorkerWorkerChannel withWorkerSid(String workerSid) {
        this.workerSid = workerSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace_sid")
    public String workspaceSid;
    public TaskrouterV1WorkspaceWorkerWorkerChannel withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}