import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifications of a destination to which the request should be routed to.
 */
export declare class HttpRouteDestination extends SpeakeasyBase {
    /**
     * The URL of a BackendService to route traffic to.
     */
    serviceName?: string;
    /**
     * Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
     */
    weight?: number;
}
