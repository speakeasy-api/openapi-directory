import { SpeakeasyBase } from "../../../internal/utils";
/**
 * State of the health check firewall configuration.
 */
export declare enum LoadBalancerBackendHealthCheckFirewallStateEnum {
    HealthCheckFirewallStateUnspecified = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
    Configured = "CONFIGURED",
    Misconfigured = "MISCONFIGURED"
}
/**
 * For display only. Metadata associated with a specific load balancer backend.
 */
export declare class LoadBalancerBackend extends SpeakeasyBase {
    /**
     * Name of a Compute Engine instance or network endpoint.
     */
    displayName?: string;
    /**
     * A list of firewall rule URIs allowing probes from health check IP ranges.
     */
    healthCheckAllowingFirewallRules?: string[];
    /**
     * A list of firewall rule URIs blocking probes from health check IP ranges.
     */
    healthCheckBlockingFirewallRules?: string[];
    /**
     * State of the health check firewall configuration.
     */
    healthCheckFirewallState?: LoadBalancerBackendHealthCheckFirewallStateEnum;
    /**
     * URI of a Compute Engine instance or network endpoint.
     */
    uri?: string;
}
