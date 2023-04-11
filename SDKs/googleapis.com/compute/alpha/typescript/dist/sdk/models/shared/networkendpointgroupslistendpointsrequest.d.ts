import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter } from "./networkendpointgroupslistendpointsrequestnetworkendpointfilter";
/**
 * Optional query parameter for showing the health status of each network endpoint. Valid options are SKIP or SHOW. If you don't specify this parameter, the health status of network endpoints will not be provided.
 */
export declare enum NetworkEndpointGroupsListEndpointsRequestHealthStatusEnum {
    Show = "SHOW",
    Skip = "SKIP"
}
export declare class NetworkEndpointGroupsListEndpointsRequest extends SpeakeasyBase {
    /**
     * Optional list of endpoints to query. This is a more efficient but also limited version of filter parameter. Endpoints in the filter must have ip_address and port fields populated, other fields are not supported.
     */
    endpointFilters?: NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter[];
    /**
     * Optional query parameter for showing the health status of each network endpoint. Valid options are SKIP or SHOW. If you don't specify this parameter, the health status of network endpoints will not be provided.
     */
    healthStatus?: NetworkEndpointGroupsListEndpointsRequestHealthStatusEnum;
}
