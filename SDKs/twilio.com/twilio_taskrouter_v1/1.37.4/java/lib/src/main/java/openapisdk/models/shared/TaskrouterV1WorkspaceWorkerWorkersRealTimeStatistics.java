package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activity_statistics")
    public Object[] activityStatistics;
    public TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics withActivityStatistics(Object[] activityStatistics) {
        this.activityStatistics = activityStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_workers")
    public Long totalWorkers;
    public TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics withTotalWorkers(Long totalWorkers) {
        this.totalWorkers = totalWorkers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace_sid")
    public String workspaceSid;
    public TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}