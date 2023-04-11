import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchRoutingMulticastRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchRoutingMulticastResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchRoutingMulticast200ApplicationJSONObject?: Record<string, any>;
}
