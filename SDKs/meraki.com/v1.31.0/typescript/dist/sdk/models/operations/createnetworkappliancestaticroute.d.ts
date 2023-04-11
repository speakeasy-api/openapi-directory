import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateNetworkApplianceStaticRouteRequestBody extends SpeakeasyBase {
    /**
     * The gateway IP (next hop) of the static route
     */
    gatewayIp: string;
    /**
     * The gateway IP (next hop) VLAN ID of the static route
     */
    gatewayVlanId?: string;
    /**
     * The name of the new static route
     */
    name: string;
    /**
     * The subnet of the static route
     */
    subnet: string;
}
export declare class CreateNetworkApplianceStaticRouteRequest extends SpeakeasyBase {
    requestBody: CreateNetworkApplianceStaticRouteRequestBody;
    networkId: string;
}
export declare class CreateNetworkApplianceStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkApplianceStaticRoute201ApplicationJSONObject?: Record<string, any>;
}
