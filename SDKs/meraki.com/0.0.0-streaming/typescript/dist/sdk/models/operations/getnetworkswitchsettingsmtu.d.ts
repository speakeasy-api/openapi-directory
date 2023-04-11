import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchSettingsMtuRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchSettingsMtuResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchSettingsMtu200ApplicationJSONObject?: Record<string, any>;
}
