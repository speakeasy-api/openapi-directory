package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsChangeProtectionActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostNetworksIdActionsChangeProtectionActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostNetworksIdActionsChangeProtectionActionResponseActionError error;
    public PostNetworksIdActionsChangeProtectionActionResponseAction withError(PostNetworksIdActionsChangeProtectionActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostNetworksIdActionsChangeProtectionActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostNetworksIdActionsChangeProtectionActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostNetworksIdActionsChangeProtectionActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostNetworksIdActionsChangeProtectionActionResponseActionResources[] resources;
    public PostNetworksIdActionsChangeProtectionActionResponseAction withResources(PostNetworksIdActionsChangeProtectionActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostNetworksIdActionsChangeProtectionActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum status;
    public PostNetworksIdActionsChangeProtectionActionResponseAction withStatus(PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}