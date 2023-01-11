package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNetworksIdActionsActionIdActionResponseAction {
    @JsonProperty("command")
    public String command;
    public GetNetworksIdActionsActionIdActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public GetNetworksIdActionsActionIdActionResponseActionError error;
    public GetNetworksIdActionsActionIdActionResponseAction withError(GetNetworksIdActionsActionIdActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public GetNetworksIdActionsActionIdActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetNetworksIdActionsActionIdActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public GetNetworksIdActionsActionIdActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public GetNetworksIdActionsActionIdActionResponseActionResources[] resources;
    public GetNetworksIdActionsActionIdActionResponseAction withResources(GetNetworksIdActionsActionIdActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public GetNetworksIdActionsActionIdActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public GetNetworksIdActionsActionIdActionResponseActionStatusEnum status;
    public GetNetworksIdActionsActionIdActionResponseAction withStatus(GetNetworksIdActionsActionIdActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}