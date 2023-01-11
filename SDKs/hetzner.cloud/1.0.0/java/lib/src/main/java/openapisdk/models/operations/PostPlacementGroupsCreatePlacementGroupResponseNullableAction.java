package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPlacementGroupsCreatePlacementGroupResponseNullableAction {
    @JsonProperty("command")
    public String command;
    public PostPlacementGroupsCreatePlacementGroupResponseNullableAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostPlacementGroupsCreatePlacementGroupResponseNullableActionError error;
    public PostPlacementGroupsCreatePlacementGroupResponseNullableAction withError(PostPlacementGroupsCreatePlacementGroupResponseNullableActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostPlacementGroupsCreatePlacementGroupResponseNullableAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostPlacementGroupsCreatePlacementGroupResponseNullableAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostPlacementGroupsCreatePlacementGroupResponseNullableAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources[] resources;
    public PostPlacementGroupsCreatePlacementGroupResponseNullableAction withResources(PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostPlacementGroupsCreatePlacementGroupResponseNullableAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum status;
    public PostPlacementGroupsCreatePlacementGroupResponseNullableAction withStatus(PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum status) {
        this.status = status;
        return this;
    }
}