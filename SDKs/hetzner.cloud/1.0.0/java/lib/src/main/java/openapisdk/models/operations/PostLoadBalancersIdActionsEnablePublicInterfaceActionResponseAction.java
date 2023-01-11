package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError error;
    public PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction withError(PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources[] resources;
    public PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction withResources(PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum status;
    public PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction withStatus(PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}