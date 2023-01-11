package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaskrouterV1WorkspaceWorkerWorkerStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TaskrouterV1WorkspaceWorkerWorkerStatistics withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cumulative")
    public Object cumulative;
    public TaskrouterV1WorkspaceWorkerWorkerStatistics withCumulative(Object cumulative) {
        this.cumulative = cumulative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("realtime")
    public Object realtime;
    public TaskrouterV1WorkspaceWorkerWorkerStatistics withRealtime(Object realtime) {
        this.realtime = realtime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TaskrouterV1WorkspaceWorkerWorkerStatistics withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace_sid")
    public String workspaceSid;
    public TaskrouterV1WorkspaceWorkerWorkerStatistics withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}