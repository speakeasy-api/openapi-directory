package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsChangeIpRangeActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostNetworksIdActionsChangeIpRangeActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostNetworksIdActionsChangeIpRangeActionResponseActionError error;
    public PostNetworksIdActionsChangeIpRangeActionResponseAction withError(PostNetworksIdActionsChangeIpRangeActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostNetworksIdActionsChangeIpRangeActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostNetworksIdActionsChangeIpRangeActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostNetworksIdActionsChangeIpRangeActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostNetworksIdActionsChangeIpRangeActionResponseActionResources[] resources;
    public PostNetworksIdActionsChangeIpRangeActionResponseAction withResources(PostNetworksIdActionsChangeIpRangeActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostNetworksIdActionsChangeIpRangeActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum status;
    public PostNetworksIdActionsChangeIpRangeActionResponseAction withStatus(PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}