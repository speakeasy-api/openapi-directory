package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetVolumesIdActionsActionIdActionResponseAction {
    @JsonProperty("command")
    public String command;
    public GetVolumesIdActionsActionIdActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public GetVolumesIdActionsActionIdActionResponseActionError error;
    public GetVolumesIdActionsActionIdActionResponseAction withError(GetVolumesIdActionsActionIdActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public GetVolumesIdActionsActionIdActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetVolumesIdActionsActionIdActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public GetVolumesIdActionsActionIdActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public GetVolumesIdActionsActionIdActionResponseActionResources[] resources;
    public GetVolumesIdActionsActionIdActionResponseAction withResources(GetVolumesIdActionsActionIdActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public GetVolumesIdActionsActionIdActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public GetVolumesIdActionsActionIdActionResponseActionStatusEnum status;
    public GetVolumesIdActionsActionIdActionResponseAction withStatus(GetVolumesIdActionsActionIdActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}