import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSsidSplashSettingsRequest extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkSsidSplashSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSsidSplashSettings200ApplicationJSONObject?: Record<string, any>;
}
