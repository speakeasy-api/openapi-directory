import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchSettingsStormControlRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchSettingsStormControlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchSettingsStormControl200ApplicationJSONObject?: Record<string, any>;
}
