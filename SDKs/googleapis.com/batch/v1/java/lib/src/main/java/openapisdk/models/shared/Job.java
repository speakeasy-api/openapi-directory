package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Job
 * The Cloud Batch Job description.
**/
public class Job {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocationPolicy")
    public AllocationPolicy allocationPolicy;
    public Job withAllocationPolicy(AllocationPolicy allocationPolicy) {
        this.allocationPolicy = allocationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Job withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Job withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logsPolicy")
    public LogsPolicy logsPolicy;
    public Job withLogsPolicy(LogsPolicy logsPolicy) {
        this.logsPolicy = logsPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Job withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifications")
    public JobNotification[] notifications;
    public Job withNotifications(JobNotification[] notifications) {
        this.notifications = notifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public String priority;
    public Job withPriority(String priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public JobStatus status;
    public Job withStatus(JobStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskGroups")
    public TaskGroup[] taskGroups;
    public Job withTaskGroups(TaskGroup[] taskGroups) {
        this.taskGroups = taskGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public Job withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Job withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}