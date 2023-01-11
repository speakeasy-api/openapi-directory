package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cumulative")
    public Object cumulative;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics withCumulative(Object cumulative) {
        this.cumulative = cumulative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("realtime")
    public Object realtime;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics withRealtime(Object realtime) {
        this.realtime = realtime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_queue_sid")
    public String taskQueueSid;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics withTaskQueueSid(String taskQueueSid) {
        this.taskQueueSid = taskQueueSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace_sid")
    public String workspaceSid;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}