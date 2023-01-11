package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIpsIdActionsAssignActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostFloatingIpsIdActionsAssignActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostFloatingIpsIdActionsAssignActionResponseActionError error;
    public PostFloatingIpsIdActionsAssignActionResponseAction withError(PostFloatingIpsIdActionsAssignActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostFloatingIpsIdActionsAssignActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostFloatingIpsIdActionsAssignActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostFloatingIpsIdActionsAssignActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostFloatingIpsIdActionsAssignActionResponseActionResources[] resources;
    public PostFloatingIpsIdActionsAssignActionResponseAction withResources(PostFloatingIpsIdActionsAssignActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostFloatingIpsIdActionsAssignActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum status;
    public PostFloatingIpsIdActionsAssignActionResponseAction withStatus(PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}