package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsDisableRescueActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsDisableRescueActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsDisableRescueActionResponseActionError error;
    public PostServersIdActionsDisableRescueActionResponseAction withError(PostServersIdActionsDisableRescueActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsDisableRescueActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsDisableRescueActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsDisableRescueActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsDisableRescueActionResponseActionResources[] resources;
    public PostServersIdActionsDisableRescueActionResponseAction withResources(PostServersIdActionsDisableRescueActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsDisableRescueActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsDisableRescueActionResponseActionStatusEnum status;
    public PostServersIdActionsDisableRescueActionResponseAction withStatus(PostServersIdActionsDisableRescueActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}