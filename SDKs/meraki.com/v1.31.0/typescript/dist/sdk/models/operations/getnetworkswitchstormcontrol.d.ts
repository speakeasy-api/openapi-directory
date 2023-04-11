import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchStormControlRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * Successful operation
 */
export declare class GetNetworkSwitchStormControl200ApplicationJSON extends SpeakeasyBase {
    /**
     * Broadcast threshold.
     */
    broadcastThreshold?: number;
    /**
     * Multicast threshold.
     */
    multicastThreshold?: number;
    /**
     * Unknown Unicast threshold.
     */
    unknownUnicastThreshold?: number;
}
export declare class GetNetworkSwitchStormControlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchStormControl200ApplicationJSONObject?: GetNetworkSwitchStormControl200ApplicationJSON;
}
