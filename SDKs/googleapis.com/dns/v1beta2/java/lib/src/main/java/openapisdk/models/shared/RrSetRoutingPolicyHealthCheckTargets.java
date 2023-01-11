package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RrSetRoutingPolicyHealthCheckTargets
 * HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response.
**/
public class RrSetRoutingPolicyHealthCheckTargets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalLoadBalancers")
    public RrSetRoutingPolicyLoadBalancerTarget[] internalLoadBalancers;
    public RrSetRoutingPolicyHealthCheckTargets withInternalLoadBalancers(RrSetRoutingPolicyLoadBalancerTarget[] internalLoadBalancers) {
        this.internalLoadBalancers = internalLoadBalancers;
        return this;
    }
}