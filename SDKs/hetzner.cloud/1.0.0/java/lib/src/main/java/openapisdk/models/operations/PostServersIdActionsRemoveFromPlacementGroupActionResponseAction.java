package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsRemoveFromPlacementGroupActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsRemoveFromPlacementGroupActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError error;
    public PostServersIdActionsRemoveFromPlacementGroupActionResponseAction withError(PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsRemoveFromPlacementGroupActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsRemoveFromPlacementGroupActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsRemoveFromPlacementGroupActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources[] resources;
    public PostServersIdActionsRemoveFromPlacementGroupActionResponseAction withResources(PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsRemoveFromPlacementGroupActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsRemoveFromPlacementGroupActionResponseActionStatusEnum status;
    public PostServersIdActionsRemoveFromPlacementGroupActionResponseAction withStatus(PostServersIdActionsRemoveFromPlacementGroupActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}