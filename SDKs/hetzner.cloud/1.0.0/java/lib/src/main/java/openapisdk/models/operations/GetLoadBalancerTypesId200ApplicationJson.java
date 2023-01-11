package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLoadBalancerTypesId200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_balancer_type")
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType loadBalancerType;
    public GetLoadBalancerTypesId200ApplicationJson withLoadBalancerType(GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType loadBalancerType) {
        this.loadBalancerType = loadBalancerType;
        return this;
    }
}