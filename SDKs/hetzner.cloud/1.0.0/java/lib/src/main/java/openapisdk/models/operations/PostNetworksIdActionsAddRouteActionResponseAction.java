package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsAddRouteActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostNetworksIdActionsAddRouteActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostNetworksIdActionsAddRouteActionResponseActionError error;
    public PostNetworksIdActionsAddRouteActionResponseAction withError(PostNetworksIdActionsAddRouteActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostNetworksIdActionsAddRouteActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostNetworksIdActionsAddRouteActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostNetworksIdActionsAddRouteActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostNetworksIdActionsAddRouteActionResponseActionResources[] resources;
    public PostNetworksIdActionsAddRouteActionResponseAction withResources(PostNetworksIdActionsAddRouteActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostNetworksIdActionsAddRouteActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostNetworksIdActionsAddRouteActionResponseActionStatusEnum status;
    public PostNetworksIdActionsAddRouteActionResponseAction withStatus(PostNetworksIdActionsAddRouteActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}