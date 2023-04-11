import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkWirelessSettingsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkWirelessSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessSettings200ApplicationJSONObject?: Record<string, any>;
}
