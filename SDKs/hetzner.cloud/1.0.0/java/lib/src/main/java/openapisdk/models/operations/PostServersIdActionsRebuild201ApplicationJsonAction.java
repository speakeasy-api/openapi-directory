package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsRebuild201ApplicationJsonAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsRebuild201ApplicationJsonAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsRebuild201ApplicationJsonActionError error;
    public PostServersIdActionsRebuild201ApplicationJsonAction withError(PostServersIdActionsRebuild201ApplicationJsonActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsRebuild201ApplicationJsonAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsRebuild201ApplicationJsonAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsRebuild201ApplicationJsonAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsRebuild201ApplicationJsonActionResources[] resources;
    public PostServersIdActionsRebuild201ApplicationJsonAction withResources(PostServersIdActionsRebuild201ApplicationJsonActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsRebuild201ApplicationJsonAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsRebuild201ApplicationJsonActionStatusEnum status;
    public PostServersIdActionsRebuild201ApplicationJsonAction withStatus(PostServersIdActionsRebuild201ApplicationJsonActionStatusEnum status) {
        this.status = status;
        return this;
    }
}