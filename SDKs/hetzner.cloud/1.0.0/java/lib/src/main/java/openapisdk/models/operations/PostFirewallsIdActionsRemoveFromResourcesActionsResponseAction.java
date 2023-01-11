package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction {
    @JsonProperty("command")
    public String command;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError error;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction withError(PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources[] resources;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction withResources(PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum status;
    public PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction withStatus(PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}