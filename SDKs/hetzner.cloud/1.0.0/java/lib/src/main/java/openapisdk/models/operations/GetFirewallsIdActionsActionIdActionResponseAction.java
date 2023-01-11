package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallsIdActionsActionIdActionResponseAction {
    @JsonProperty("command")
    public String command;
    public GetFirewallsIdActionsActionIdActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public GetFirewallsIdActionsActionIdActionResponseActionError error;
    public GetFirewallsIdActionsActionIdActionResponseAction withError(GetFirewallsIdActionsActionIdActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public GetFirewallsIdActionsActionIdActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetFirewallsIdActionsActionIdActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public GetFirewallsIdActionsActionIdActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public GetFirewallsIdActionsActionIdActionResponseActionResources[] resources;
    public GetFirewallsIdActionsActionIdActionResponseAction withResources(GetFirewallsIdActionsActionIdActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public GetFirewallsIdActionsActionIdActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public GetFirewallsIdActionsActionIdActionResponseActionStatusEnum status;
    public GetFirewallsIdActionsActionIdActionResponseAction withStatus(GetFirewallsIdActionsActionIdActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}