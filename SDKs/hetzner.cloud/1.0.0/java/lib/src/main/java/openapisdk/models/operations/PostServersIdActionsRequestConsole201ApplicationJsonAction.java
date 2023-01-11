package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsRequestConsole201ApplicationJsonAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsRequestConsole201ApplicationJsonAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsRequestConsole201ApplicationJsonActionError error;
    public PostServersIdActionsRequestConsole201ApplicationJsonAction withError(PostServersIdActionsRequestConsole201ApplicationJsonActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsRequestConsole201ApplicationJsonAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsRequestConsole201ApplicationJsonAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsRequestConsole201ApplicationJsonAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsRequestConsole201ApplicationJsonActionResources[] resources;
    public PostServersIdActionsRequestConsole201ApplicationJsonAction withResources(PostServersIdActionsRequestConsole201ApplicationJsonActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsRequestConsole201ApplicationJsonAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsRequestConsole201ApplicationJsonActionStatusEnum status;
    public PostServersIdActionsRequestConsole201ApplicationJsonAction withStatus(PostServersIdActionsRequestConsole201ApplicationJsonActionStatusEnum status) {
        this.status = status;
        return this;
    }
}