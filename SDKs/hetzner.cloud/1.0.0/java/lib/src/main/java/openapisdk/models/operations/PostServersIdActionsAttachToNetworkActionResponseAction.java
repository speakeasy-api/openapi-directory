package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsAttachToNetworkActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsAttachToNetworkActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsAttachToNetworkActionResponseActionError error;
    public PostServersIdActionsAttachToNetworkActionResponseAction withError(PostServersIdActionsAttachToNetworkActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsAttachToNetworkActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsAttachToNetworkActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsAttachToNetworkActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsAttachToNetworkActionResponseActionResources[] resources;
    public PostServersIdActionsAttachToNetworkActionResponseAction withResources(PostServersIdActionsAttachToNetworkActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsAttachToNetworkActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsAttachToNetworkActionResponseActionStatusEnum status;
    public PostServersIdActionsAttachToNetworkActionResponseAction withStatus(PostServersIdActionsAttachToNetworkActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}