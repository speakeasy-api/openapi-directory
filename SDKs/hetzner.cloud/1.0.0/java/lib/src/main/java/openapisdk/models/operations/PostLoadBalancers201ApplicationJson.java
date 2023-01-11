package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancers201ApplicationJson {
    @JsonProperty("action")
    public PostLoadBalancers201ApplicationJsonAction action;
    public PostLoadBalancers201ApplicationJson withAction(PostLoadBalancers201ApplicationJsonAction action) {
        this.action = action;
        return this;
    }
    @JsonProperty("load_balancer")
    public PostLoadBalancers201ApplicationJsonLoadBalancer loadBalancer;
    public PostLoadBalancers201ApplicationJson withLoadBalancer(PostLoadBalancers201ApplicationJsonLoadBalancer loadBalancer) {
        this.loadBalancer = loadBalancer;
        return this;
    }
}