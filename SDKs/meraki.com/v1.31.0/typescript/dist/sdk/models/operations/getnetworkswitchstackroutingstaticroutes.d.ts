import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchStackRoutingStaticRoutesRequest extends SpeakeasyBase {
    networkId: string;
    switchStackId: string;
}
export declare class GetNetworkSwitchStackRoutingStaticRoutesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObjects?: Record<string, any>[];
}
