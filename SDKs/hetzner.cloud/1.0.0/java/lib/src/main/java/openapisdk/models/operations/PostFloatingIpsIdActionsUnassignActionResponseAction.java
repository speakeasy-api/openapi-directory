package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIpsIdActionsUnassignActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostFloatingIpsIdActionsUnassignActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostFloatingIpsIdActionsUnassignActionResponseActionError error;
    public PostFloatingIpsIdActionsUnassignActionResponseAction withError(PostFloatingIpsIdActionsUnassignActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostFloatingIpsIdActionsUnassignActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostFloatingIpsIdActionsUnassignActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostFloatingIpsIdActionsUnassignActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostFloatingIpsIdActionsUnassignActionResponseActionResources[] resources;
    public PostFloatingIpsIdActionsUnassignActionResponseAction withResources(PostFloatingIpsIdActionsUnassignActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostFloatingIpsIdActionsUnassignActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum status;
    public PostFloatingIpsIdActionsUnassignActionResponseAction withStatus(PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}