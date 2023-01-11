package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsAddToPlacementGroupActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsAddToPlacementGroupActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsAddToPlacementGroupActionResponseActionError error;
    public PostServersIdActionsAddToPlacementGroupActionResponseAction withError(PostServersIdActionsAddToPlacementGroupActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsAddToPlacementGroupActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsAddToPlacementGroupActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsAddToPlacementGroupActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsAddToPlacementGroupActionResponseActionResources[] resources;
    public PostServersIdActionsAddToPlacementGroupActionResponseAction withResources(PostServersIdActionsAddToPlacementGroupActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsAddToPlacementGroupActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum status;
    public PostServersIdActionsAddToPlacementGroupActionResponseAction withStatus(PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}