import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateNetworkStaticRouteRequestBody extends SpeakeasyBase {
    /**
     * The gateway IP (next hop) of the static route
     */
    gatewayIp: string;
    /**
     * The name of the new static route
     */
    name: string;
    /**
     * The subnet of the static route
     */
    subnet: string;
}
export declare class CreateNetworkStaticRouteRequest extends SpeakeasyBase {
    requestBody: CreateNetworkStaticRouteRequestBody;
    networkId: string;
}
export declare class CreateNetworkStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkStaticRoute201ApplicationJSONObject?: Record<string, any>;
}
