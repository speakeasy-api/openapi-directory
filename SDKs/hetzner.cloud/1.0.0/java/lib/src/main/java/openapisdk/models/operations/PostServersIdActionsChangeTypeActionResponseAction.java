package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsChangeTypeActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsChangeTypeActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsChangeTypeActionResponseActionError error;
    public PostServersIdActionsChangeTypeActionResponseAction withError(PostServersIdActionsChangeTypeActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsChangeTypeActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsChangeTypeActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsChangeTypeActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsChangeTypeActionResponseActionResources[] resources;
    public PostServersIdActionsChangeTypeActionResponseAction withResources(PostServersIdActionsChangeTypeActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsChangeTypeActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsChangeTypeActionResponseActionStatusEnum status;
    public PostServersIdActionsChangeTypeActionResponseAction withStatus(PostServersIdActionsChangeTypeActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}