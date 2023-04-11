import { SpeakeasyBase } from "../../../internal/utils";
import { HealthStatusForNetworkEndpoint } from "./healthstatusfornetworkendpoint";
import { NetworkEndpoint } from "./networkendpoint";
export declare class NetworkEndpointWithHealthStatus extends SpeakeasyBase {
    /**
     * [Output only] The health status of network endpoint;
     */
    healths?: HealthStatusForNetworkEndpoint[];
    /**
     * The network endpoint.
     */
    networkEndpoint?: NetworkEndpoint;
}
