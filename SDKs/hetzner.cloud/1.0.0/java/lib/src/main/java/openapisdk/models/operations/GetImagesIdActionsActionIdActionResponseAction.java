package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetImagesIdActionsActionIdActionResponseAction {
    @JsonProperty("command")
    public String command;
    public GetImagesIdActionsActionIdActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public GetImagesIdActionsActionIdActionResponseActionError error;
    public GetImagesIdActionsActionIdActionResponseAction withError(GetImagesIdActionsActionIdActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public GetImagesIdActionsActionIdActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetImagesIdActionsActionIdActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public GetImagesIdActionsActionIdActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public GetImagesIdActionsActionIdActionResponseActionResources[] resources;
    public GetImagesIdActionsActionIdActionResponseAction withResources(GetImagesIdActionsActionIdActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public GetImagesIdActionsActionIdActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public GetImagesIdActionsActionIdActionResponseActionStatusEnum status;
    public GetImagesIdActionsActionIdActionResponseAction withStatus(GetImagesIdActionsActionIdActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}