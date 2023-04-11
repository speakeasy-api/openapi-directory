import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkEndpoint } from "./networkendpoint";
export declare class RegionNetworkEndpointGroupsAttachEndpointsRequest extends SpeakeasyBase {
    /**
     * The list of network endpoints to be attached.
     */
    networkEndpoints?: NetworkEndpoint[];
}
