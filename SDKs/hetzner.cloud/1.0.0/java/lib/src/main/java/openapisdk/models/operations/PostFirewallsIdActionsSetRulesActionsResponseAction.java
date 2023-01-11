package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsIdActionsSetRulesActionsResponseAction {
    @JsonProperty("command")
    public String command;
    public PostFirewallsIdActionsSetRulesActionsResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostFirewallsIdActionsSetRulesActionsResponseActionError error;
    public PostFirewallsIdActionsSetRulesActionsResponseAction withError(PostFirewallsIdActionsSetRulesActionsResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostFirewallsIdActionsSetRulesActionsResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostFirewallsIdActionsSetRulesActionsResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostFirewallsIdActionsSetRulesActionsResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostFirewallsIdActionsSetRulesActionsResponseActionResources[] resources;
    public PostFirewallsIdActionsSetRulesActionsResponseAction withResources(PostFirewallsIdActionsSetRulesActionsResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostFirewallsIdActionsSetRulesActionsResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum status;
    public PostFirewallsIdActionsSetRulesActionsResponseAction withStatus(PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}