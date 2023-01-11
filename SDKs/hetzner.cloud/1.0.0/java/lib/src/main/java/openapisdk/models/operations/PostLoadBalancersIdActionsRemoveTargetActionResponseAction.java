package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsRemoveTargetActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostLoadBalancersIdActionsRemoveTargetActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostLoadBalancersIdActionsRemoveTargetActionResponseActionError error;
    public PostLoadBalancersIdActionsRemoveTargetActionResponseAction withError(PostLoadBalancersIdActionsRemoveTargetActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostLoadBalancersIdActionsRemoveTargetActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsRemoveTargetActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostLoadBalancersIdActionsRemoveTargetActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources[] resources;
    public PostLoadBalancersIdActionsRemoveTargetActionResponseAction withResources(PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostLoadBalancersIdActionsRemoveTargetActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum status;
    public PostLoadBalancersIdActionsRemoveTargetActionResponseAction withStatus(PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}