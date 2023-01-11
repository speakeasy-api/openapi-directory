package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoadBalancerInfo
 * For display only. Metadata associated with a load balancer.
**/
public class LoadBalancerInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backendType")
    public LoadBalancerInfoBackendTypeEnum backendType;
    public LoadBalancerInfo withBackendType(LoadBalancerInfoBackendTypeEnum backendType) {
        this.backendType = backendType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backendUri")
    public String backendUri;
    public LoadBalancerInfo withBackendUri(String backendUri) {
        this.backendUri = backendUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backends")
    public LoadBalancerBackend[] backends;
    public LoadBalancerInfo withBackends(LoadBalancerBackend[] backends) {
        this.backends = backends;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthCheckUri")
    public String healthCheckUri;
    public LoadBalancerInfo withHealthCheckUri(String healthCheckUri) {
        this.healthCheckUri = healthCheckUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loadBalancerType")
    public LoadBalancerInfoLoadBalancerTypeEnum loadBalancerType;
    public LoadBalancerInfo withLoadBalancerType(LoadBalancerInfoLoadBalancerTypeEnum loadBalancerType) {
        this.loadBalancerType = loadBalancerType;
        return this;
    }
}