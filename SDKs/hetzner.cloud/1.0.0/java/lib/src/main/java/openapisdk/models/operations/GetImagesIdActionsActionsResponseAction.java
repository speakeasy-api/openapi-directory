package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetImagesIdActionsActionsResponseAction {
    @JsonProperty("command")
    public String command;
    public GetImagesIdActionsActionsResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public GetImagesIdActionsActionsResponseActionError error;
    public GetImagesIdActionsActionsResponseAction withError(GetImagesIdActionsActionsResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public GetImagesIdActionsActionsResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetImagesIdActionsActionsResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public GetImagesIdActionsActionsResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public GetImagesIdActionsActionsResponseActionResources[] resources;
    public GetImagesIdActionsActionsResponseAction withResources(GetImagesIdActionsActionsResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public GetImagesIdActionsActionsResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public GetImagesIdActionsActionsResponseActionStatusEnum status;
    public GetImagesIdActionsActionsResponseAction withStatus(GetImagesIdActionsActionsResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}