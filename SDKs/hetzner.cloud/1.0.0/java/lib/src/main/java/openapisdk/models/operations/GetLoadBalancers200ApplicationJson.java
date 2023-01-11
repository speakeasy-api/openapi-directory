package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLoadBalancers200ApplicationJson {
    @JsonProperty("load_balancers")
    public GetLoadBalancers200ApplicationJsonLoadBalancers[] loadBalancers;
    public GetLoadBalancers200ApplicationJson withLoadBalancers(GetLoadBalancers200ApplicationJsonLoadBalancers[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetLoadBalancers200ApplicationJsonMeta meta;
    public GetLoadBalancers200ApplicationJson withMeta(GetLoadBalancers200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}