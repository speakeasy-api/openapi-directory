import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceStaticRouteRequest extends SpeakeasyBase {
    networkId: string;
    staticRouteId: string;
}
export declare class GetNetworkApplianceStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceStaticRoute200ApplicationJSONObject?: Record<string, any>;
}
