package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsDetachFromNetworkActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsDetachFromNetworkActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsDetachFromNetworkActionResponseActionError error;
    public PostServersIdActionsDetachFromNetworkActionResponseAction withError(PostServersIdActionsDetachFromNetworkActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsDetachFromNetworkActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsDetachFromNetworkActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsDetachFromNetworkActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsDetachFromNetworkActionResponseActionResources[] resources;
    public PostServersIdActionsDetachFromNetworkActionResponseAction withResources(PostServersIdActionsDetachFromNetworkActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsDetachFromNetworkActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum status;
    public PostServersIdActionsDetachFromNetworkActionResponseAction withStatus(PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}