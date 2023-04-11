import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkUplinkSettingsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkUplinkSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkUplinkSettings200ApplicationJSONObject?: Record<string, any>;
}
