package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsIdActionsApplyToResourcesActionsResponseAction {
    @JsonProperty("command")
    public String command;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostFirewallsIdActionsApplyToResourcesActionsResponseActionError error;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseAction withError(PostFirewallsIdActionsApplyToResourcesActionsResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources[] resources;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseAction withResources(PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum status;
    public PostFirewallsIdActionsApplyToResourcesActionsResponseAction withStatus(PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}