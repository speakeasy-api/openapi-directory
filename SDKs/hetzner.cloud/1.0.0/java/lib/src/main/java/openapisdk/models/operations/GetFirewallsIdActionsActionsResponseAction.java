package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallsIdActionsActionsResponseAction {
    @JsonProperty("command")
    public String command;
    public GetFirewallsIdActionsActionsResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public GetFirewallsIdActionsActionsResponseActionError error;
    public GetFirewallsIdActionsActionsResponseAction withError(GetFirewallsIdActionsActionsResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public GetFirewallsIdActionsActionsResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetFirewallsIdActionsActionsResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public GetFirewallsIdActionsActionsResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public GetFirewallsIdActionsActionsResponseActionResources[] resources;
    public GetFirewallsIdActionsActionsResponseAction withResources(GetFirewallsIdActionsActionsResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public GetFirewallsIdActionsActionsResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public GetFirewallsIdActionsActionsResponseActionStatusEnum status;
    public GetFirewallsIdActionsActionsResponseAction withStatus(GetFirewallsIdActionsActionsResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}