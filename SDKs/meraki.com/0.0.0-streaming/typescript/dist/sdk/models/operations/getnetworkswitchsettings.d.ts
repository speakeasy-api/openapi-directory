import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchSettingsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchSettings200ApplicationJSONObject?: Record<string, any>;
}
