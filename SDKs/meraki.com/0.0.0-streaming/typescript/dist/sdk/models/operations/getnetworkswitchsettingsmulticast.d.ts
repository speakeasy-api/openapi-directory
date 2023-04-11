import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchSettingsMulticastRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchSettingsMulticastResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchSettingsMulticast200ApplicationJSONObject?: Record<string, any>;
}
