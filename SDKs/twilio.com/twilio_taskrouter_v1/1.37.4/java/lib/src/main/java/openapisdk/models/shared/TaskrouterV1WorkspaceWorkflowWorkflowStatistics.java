package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaskrouterV1WorkspaceWorkflowWorkflowStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TaskrouterV1WorkspaceWorkflowWorkflowStatistics withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cumulative")
    public Object cumulative;
    public TaskrouterV1WorkspaceWorkflowWorkflowStatistics withCumulative(Object cumulative) {
        this.cumulative = cumulative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("realtime")
    public Object realtime;
    public TaskrouterV1WorkspaceWorkflowWorkflowStatistics withRealtime(Object realtime) {
        this.realtime = realtime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TaskrouterV1WorkspaceWorkflowWorkflowStatistics withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflow_sid")
    public String workflowSid;
    public TaskrouterV1WorkspaceWorkflowWorkflowStatistics withWorkflowSid(String workflowSid) {
        this.workflowSid = workflowSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace_sid")
    public String workspaceSid;
    public TaskrouterV1WorkspaceWorkflowWorkflowStatistics withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}