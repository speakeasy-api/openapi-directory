package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsCreateImage201ApplicationJsonAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsCreateImage201ApplicationJsonAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsCreateImage201ApplicationJsonActionError error;
    public PostServersIdActionsCreateImage201ApplicationJsonAction withError(PostServersIdActionsCreateImage201ApplicationJsonActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsCreateImage201ApplicationJsonAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsCreateImage201ApplicationJsonAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsCreateImage201ApplicationJsonAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsCreateImage201ApplicationJsonActionResources[] resources;
    public PostServersIdActionsCreateImage201ApplicationJsonAction withResources(PostServersIdActionsCreateImage201ApplicationJsonActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsCreateImage201ApplicationJsonAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsCreateImage201ApplicationJsonActionStatusEnum status;
    public PostServersIdActionsCreateImage201ApplicationJsonAction withStatus(PostServersIdActionsCreateImage201ApplicationJsonActionStatusEnum status) {
        this.status = status;
        return this;
    }
}