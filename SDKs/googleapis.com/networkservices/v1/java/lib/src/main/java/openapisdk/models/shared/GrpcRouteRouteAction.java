package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcRouteRouteAction
 * Specifies how to route matched traffic.
**/
public class GrpcRouteRouteAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public GrpcRouteDestination[] destinations;
    public GrpcRouteRouteAction withDestinations(GrpcRouteDestination[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("faultInjectionPolicy")
    public GrpcRouteFaultInjectionPolicy faultInjectionPolicy;
    public GrpcRouteRouteAction withFaultInjectionPolicy(GrpcRouteFaultInjectionPolicy faultInjectionPolicy) {
        this.faultInjectionPolicy = faultInjectionPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryPolicy")
    public GrpcRouteRetryPolicy retryPolicy;
    public GrpcRouteRouteAction withRetryPolicy(GrpcRouteRetryPolicy retryPolicy) {
        this.retryPolicy = retryPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public GrpcRouteRouteAction withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
}