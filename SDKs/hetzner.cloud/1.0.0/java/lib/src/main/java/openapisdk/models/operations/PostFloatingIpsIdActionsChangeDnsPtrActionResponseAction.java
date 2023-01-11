package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError error;
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction withError(PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources[] resources;
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction withResources(PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum status;
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction withStatus(PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}