package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFloatingIpsIdActionsActionIdActionResponseAction {
    @JsonProperty("command")
    public String command;
    public GetFloatingIpsIdActionsActionIdActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public GetFloatingIpsIdActionsActionIdActionResponseActionError error;
    public GetFloatingIpsIdActionsActionIdActionResponseAction withError(GetFloatingIpsIdActionsActionIdActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public GetFloatingIpsIdActionsActionIdActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetFloatingIpsIdActionsActionIdActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public GetFloatingIpsIdActionsActionIdActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public GetFloatingIpsIdActionsActionIdActionResponseActionResources[] resources;
    public GetFloatingIpsIdActionsActionIdActionResponseAction withResources(GetFloatingIpsIdActionsActionIdActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public GetFloatingIpsIdActionsActionIdActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public GetFloatingIpsIdActionsActionIdActionResponseActionStatusEnum status;
    public GetFloatingIpsIdActionsActionIdActionResponseAction withStatus(GetFloatingIpsIdActionsActionIdActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}