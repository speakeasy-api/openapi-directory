import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges extends SpeakeasyBase {
    /**
     * A text comment for the reserved range
     */
    comment: string;
    /**
     * The last IP in the reserved range
     */
    end: string;
    /**
     * The first IP in the reserved range
     */
    start: string;
}
export declare class UpdateNetworkApplianceStaticRouteRequestBody extends SpeakeasyBase {
    /**
     * The enabled state of the static route
     */
    enabled?: boolean;
    /**
     * The DHCP fixed IP assignments on the static route. This should be an object that contains mappings from MAC addresses to objects that themselves each contain "ip" and "name" string fields. See the sample request/response for more details.
     */
    fixedIpAssignments?: Record<string, any>;
    /**
     * The gateway IP (next hop) of the static route
     */
    gatewayIp?: string;
    /**
     * The gateway IP (next hop) VLAN ID of the static route
     */
    gatewayVlanId?: string;
    /**
     * The name of the static route
     */
    name?: string;
    /**
     * The DHCP reserved IP ranges on the static route
     */
    reservedIpRanges?: UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges[];
    /**
     * The subnet of the static route
     */
    subnet?: string;
}
export declare class UpdateNetworkApplianceStaticRouteRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceStaticRouteRequestBody;
    networkId: string;
    staticRouteId: string;
}
export declare class UpdateNetworkApplianceStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceStaticRoute200ApplicationJSONObject?: Record<string, any>;
}
