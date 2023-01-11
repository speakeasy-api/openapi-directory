package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsAddSubnetActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostNetworksIdActionsAddSubnetActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostNetworksIdActionsAddSubnetActionResponseActionError error;
    public PostNetworksIdActionsAddSubnetActionResponseAction withError(PostNetworksIdActionsAddSubnetActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostNetworksIdActionsAddSubnetActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostNetworksIdActionsAddSubnetActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostNetworksIdActionsAddSubnetActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostNetworksIdActionsAddSubnetActionResponseActionResources[] resources;
    public PostNetworksIdActionsAddSubnetActionResponseAction withResources(PostNetworksIdActionsAddSubnetActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostNetworksIdActionsAddSubnetActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum status;
    public PostNetworksIdActionsAddSubnetActionResponseAction withStatus(PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}