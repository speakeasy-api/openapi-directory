package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetActionsIdActionResponseAction {
    @JsonProperty("command")
    public String command;
    public GetActionsIdActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public GetActionsIdActionResponseActionError error;
    public GetActionsIdActionResponseAction withError(GetActionsIdActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public GetActionsIdActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetActionsIdActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public GetActionsIdActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public GetActionsIdActionResponseActionResources[] resources;
    public GetActionsIdActionResponseAction withResources(GetActionsIdActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public GetActionsIdActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public GetActionsIdActionResponseActionStatusEnum status;
    public GetActionsIdActionResponseAction withStatus(GetActionsIdActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}