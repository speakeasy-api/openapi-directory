import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchStackRoutingStaticRouteRequest extends SpeakeasyBase {
    networkId: string;
    staticRouteId: string;
    switchStackId: string;
}
export declare class GetNetworkSwitchStackRoutingStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject?: Record<string, any>;
}
