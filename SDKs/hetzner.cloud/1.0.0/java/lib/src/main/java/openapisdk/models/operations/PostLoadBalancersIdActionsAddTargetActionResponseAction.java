package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsAddTargetActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostLoadBalancersIdActionsAddTargetActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostLoadBalancersIdActionsAddTargetActionResponseActionError error;
    public PostLoadBalancersIdActionsAddTargetActionResponseAction withError(PostLoadBalancersIdActionsAddTargetActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostLoadBalancersIdActionsAddTargetActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsAddTargetActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostLoadBalancersIdActionsAddTargetActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostLoadBalancersIdActionsAddTargetActionResponseActionResources[] resources;
    public PostLoadBalancersIdActionsAddTargetActionResponseAction withResources(PostLoadBalancersIdActionsAddTargetActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostLoadBalancersIdActionsAddTargetActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum status;
    public PostLoadBalancersIdActionsAddTargetActionResponseAction withStatus(PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}