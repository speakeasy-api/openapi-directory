package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsDeleteRouteActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostNetworksIdActionsDeleteRouteActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostNetworksIdActionsDeleteRouteActionResponseActionError error;
    public PostNetworksIdActionsDeleteRouteActionResponseAction withError(PostNetworksIdActionsDeleteRouteActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostNetworksIdActionsDeleteRouteActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostNetworksIdActionsDeleteRouteActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostNetworksIdActionsDeleteRouteActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostNetworksIdActionsDeleteRouteActionResponseActionResources[] resources;
    public PostNetworksIdActionsDeleteRouteActionResponseAction withResources(PostNetworksIdActionsDeleteRouteActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostNetworksIdActionsDeleteRouteActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum status;
    public PostNetworksIdActionsDeleteRouteActionResponseAction withStatus(PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}