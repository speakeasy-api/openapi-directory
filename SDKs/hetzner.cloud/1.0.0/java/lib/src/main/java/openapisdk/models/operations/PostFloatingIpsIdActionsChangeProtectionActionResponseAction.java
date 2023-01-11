package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIpsIdActionsChangeProtectionActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostFloatingIpsIdActionsChangeProtectionActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostFloatingIpsIdActionsChangeProtectionActionResponseActionError error;
    public PostFloatingIpsIdActionsChangeProtectionActionResponseAction withError(PostFloatingIpsIdActionsChangeProtectionActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostFloatingIpsIdActionsChangeProtectionActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostFloatingIpsIdActionsChangeProtectionActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostFloatingIpsIdActionsChangeProtectionActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources[] resources;
    public PostFloatingIpsIdActionsChangeProtectionActionResponseAction withResources(PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostFloatingIpsIdActionsChangeProtectionActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum status;
    public PostFloatingIpsIdActionsChangeProtectionActionResponseAction withStatus(PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}