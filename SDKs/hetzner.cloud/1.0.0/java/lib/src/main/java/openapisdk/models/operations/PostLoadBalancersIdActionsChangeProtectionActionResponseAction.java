package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsChangeProtectionActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostLoadBalancersIdActionsChangeProtectionActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostLoadBalancersIdActionsChangeProtectionActionResponseActionError error;
    public PostLoadBalancersIdActionsChangeProtectionActionResponseAction withError(PostLoadBalancersIdActionsChangeProtectionActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostLoadBalancersIdActionsChangeProtectionActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsChangeProtectionActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostLoadBalancersIdActionsChangeProtectionActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources[] resources;
    public PostLoadBalancersIdActionsChangeProtectionActionResponseAction withResources(PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostLoadBalancersIdActionsChangeProtectionActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostLoadBalancersIdActionsChangeProtectionActionResponseActionStatusEnum status;
    public PostLoadBalancersIdActionsChangeProtectionActionResponseAction withStatus(PostLoadBalancersIdActionsChangeProtectionActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}