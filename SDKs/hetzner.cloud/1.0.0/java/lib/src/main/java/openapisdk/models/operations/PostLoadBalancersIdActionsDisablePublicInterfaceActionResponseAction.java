package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError error;
    public PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction withError(PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources[] resources;
    public PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction withResources(PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum status;
    public PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction withStatus(PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}