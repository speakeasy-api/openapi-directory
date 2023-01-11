package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoadBalancerBackend
 * For display only. Metadata associated with a specific load balancer backend.
**/
public class LoadBalancerBackend {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public LoadBalancerBackend withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthCheckAllowingFirewallRules")
    public String[] healthCheckAllowingFirewallRules;
    public LoadBalancerBackend withHealthCheckAllowingFirewallRules(String[] healthCheckAllowingFirewallRules) {
        this.healthCheckAllowingFirewallRules = healthCheckAllowingFirewallRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthCheckBlockingFirewallRules")
    public String[] healthCheckBlockingFirewallRules;
    public LoadBalancerBackend withHealthCheckBlockingFirewallRules(String[] healthCheckBlockingFirewallRules) {
        this.healthCheckBlockingFirewallRules = healthCheckBlockingFirewallRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthCheckFirewallState")
    public LoadBalancerBackendHealthCheckFirewallStateEnum healthCheckFirewallState;
    public LoadBalancerBackend withHealthCheckFirewallState(LoadBalancerBackendHealthCheckFirewallStateEnum healthCheckFirewallState) {
        this.healthCheckFirewallState = healthCheckFirewallState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public LoadBalancerBackend withUri(String uri) {
        this.uri = uri;
        return this;
    }
}