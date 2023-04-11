import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkEndpoint } from "./networkendpoint";
export declare class GlobalNetworkEndpointGroupsDetachEndpointsRequest extends SpeakeasyBase {
    /**
     * The list of network endpoints to be detached.
     */
    networkEndpoints?: NetworkEndpoint[];
}
