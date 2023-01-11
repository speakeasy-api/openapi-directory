package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsDeleteSubnetActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostNetworksIdActionsDeleteSubnetActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostNetworksIdActionsDeleteSubnetActionResponseActionError error;
    public PostNetworksIdActionsDeleteSubnetActionResponseAction withError(PostNetworksIdActionsDeleteSubnetActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostNetworksIdActionsDeleteSubnetActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostNetworksIdActionsDeleteSubnetActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostNetworksIdActionsDeleteSubnetActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostNetworksIdActionsDeleteSubnetActionResponseActionResources[] resources;
    public PostNetworksIdActionsDeleteSubnetActionResponseAction withResources(PostNetworksIdActionsDeleteSubnetActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostNetworksIdActionsDeleteSubnetActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostNetworksIdActionsDeleteSubnetActionResponseActionStatusEnum status;
    public PostNetworksIdActionsDeleteSubnetActionResponseAction withStatus(PostNetworksIdActionsDeleteSubnetActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}