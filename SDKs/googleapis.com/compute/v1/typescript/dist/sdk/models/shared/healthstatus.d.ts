import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Health state of the IPv4 address of the instance.
 */
export declare enum HealthStatusHealthStateEnum {
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY"
}
export declare enum HealthStatusWeightErrorEnum {
    InvalidWeight = "INVALID_WEIGHT",
    MissingWeight = "MISSING_WEIGHT",
    UnavailableWeight = "UNAVAILABLE_WEIGHT",
    WeightNone = "WEIGHT_NONE"
}
export declare class HealthStatus extends SpeakeasyBase {
    /**
     * Metadata defined as annotations for network endpoint.
     */
    annotations?: Record<string, string>;
    /**
     * URL of the forwarding rule associated with the health status of the instance.
     */
    forwardingRule?: string;
    /**
     * A forwarding rule IP address assigned to this instance.
     */
    forwardingRuleIp?: string;
    /**
     * Health state of the IPv4 address of the instance.
     */
    healthState?: HealthStatusHealthStateEnum;
    /**
     * URL of the instance resource.
     */
    instance?: string;
    /**
     * For target pool based Network Load Balancing, it indicates the forwarding rule's IP address assigned to this instance. For other types of load balancing, the field indicates VM internal ip.
     */
    ipAddress?: string;
    /**
     * The named port of the instance group, not necessarily the port that is health-checked.
     */
    port?: number;
    weight?: string;
    weightError?: HealthStatusWeightErrorEnum;
}
