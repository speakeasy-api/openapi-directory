import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceSwitchRoutingStaticRouteRequest extends SpeakeasyBase {
    serial: string;
    staticRouteId: string;
}
export declare class GetDeviceSwitchRoutingStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceSwitchRoutingStaticRoute200ApplicationJSONObject?: Record<string, any>;
}
