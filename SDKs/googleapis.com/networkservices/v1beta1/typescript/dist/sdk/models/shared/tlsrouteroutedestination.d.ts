import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describe the destination for traffic to be routed to.
 */
export declare class TlsRouteRouteDestination extends SpeakeasyBase {
    /**
     * Required. The URL of a BackendService to route traffic to.
     */
    serviceName?: string;
    /**
     * Optional. Specifies the proportion of requests forwareded to the backend referenced by the service_name field. This is computed as: weight/Sum(weights in destinations) Weights in all destinations does not need to sum up to 100.
     */
    weight?: number;
}
