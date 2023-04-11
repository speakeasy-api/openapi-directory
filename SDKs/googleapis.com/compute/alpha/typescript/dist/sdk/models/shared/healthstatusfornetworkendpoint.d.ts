import { SpeakeasyBase } from "../../../internal/utils";
import { BackendServiceReference } from "./backendservicereference";
import { ForwardingRuleReference } from "./forwardingrulereference";
import { HealthCheckReference } from "./healthcheckreference";
import { HealthCheckServiceReference } from "./healthcheckservicereference";
/**
 * Health state of the network endpoint determined based on the health checks configured.
 */
export declare enum HealthStatusForNetworkEndpointHealthStateEnum {
    Draining = "DRAINING",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    Unknown = "UNKNOWN"
}
/**
 * Health state of the ipv6 network endpoint determined based on the health checks configured.
 */
export declare enum HealthStatusForNetworkEndpointIpv6HealthStateEnum {
    Draining = "DRAINING",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    Unknown = "UNKNOWN"
}
export declare class HealthStatusForNetworkEndpoint extends SpeakeasyBase {
    backendService?: BackendServiceReference;
    forwardingRule?: ForwardingRuleReference;
    /**
     * A full or valid partial URL to a health check. For example, the following are valid URLs: - https://www.googleapis.com/compute/beta/projects/project-id/global/httpHealthChecks/health-check - projects/project-id/global/httpHealthChecks/health-check - global/httpHealthChecks/health-check
     */
    healthCheck?: HealthCheckReference;
    /**
     * A full or valid partial URL to a health check service. For example, the following are valid URLs: - https://www.googleapis.com/compute/beta/projects/project-id/regions/us-west1/healthCheckServices/health-check-service - projects/project-id/regions/us-west1/healthCheckServices/health-check-service - regions/us-west1/healthCheckServices/health-check-service
     */
    healthCheckService?: HealthCheckServiceReference;
    /**
     * Health state of the network endpoint determined based on the health checks configured.
     */
    healthState?: HealthStatusForNetworkEndpointHealthStateEnum;
    /**
     * Health state of the ipv6 network endpoint determined based on the health checks configured.
     */
    ipv6HealthState?: HealthStatusForNetworkEndpointIpv6HealthStateEnum;
}
