import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkStaticRouteRequest extends SpeakeasyBase {
    networkId: string;
    staticRouteId: string;
}
export declare class GetNetworkStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkStaticRoute200ApplicationJSONObject?: Record<string, any>;
}
