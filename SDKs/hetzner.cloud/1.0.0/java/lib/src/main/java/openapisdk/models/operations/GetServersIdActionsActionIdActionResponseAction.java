package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServersIdActionsActionIdActionResponseAction {
    @JsonProperty("command")
    public String command;
    public GetServersIdActionsActionIdActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public GetServersIdActionsActionIdActionResponseActionError error;
    public GetServersIdActionsActionIdActionResponseAction withError(GetServersIdActionsActionIdActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public GetServersIdActionsActionIdActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetServersIdActionsActionIdActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public GetServersIdActionsActionIdActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public GetServersIdActionsActionIdActionResponseActionResources[] resources;
    public GetServersIdActionsActionIdActionResponseAction withResources(GetServersIdActionsActionIdActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public GetServersIdActionsActionIdActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public GetServersIdActionsActionIdActionResponseActionStatusEnum status;
    public GetServersIdActionsActionIdActionResponseAction withStatus(GetServersIdActionsActionIdActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}