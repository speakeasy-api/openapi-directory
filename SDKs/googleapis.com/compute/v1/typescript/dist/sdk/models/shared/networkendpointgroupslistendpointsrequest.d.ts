import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional query parameter for showing the health status of each network endpoint. Valid options are SKIP or SHOW. If you don't specify this parameter, the health status of network endpoints will not be provided.
 */
export declare enum NetworkEndpointGroupsListEndpointsRequestHealthStatusEnum {
    Show = "SHOW",
    Skip = "SKIP"
}
export declare class NetworkEndpointGroupsListEndpointsRequest extends SpeakeasyBase {
    /**
     * Optional query parameter for showing the health status of each network endpoint. Valid options are SKIP or SHOW. If you don't specify this parameter, the health status of network endpoints will not be provided.
     */
    healthStatus?: NetworkEndpointGroupsListEndpointsRequestHealthStatusEnum;
}
