import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSecurityIntrusionSettingsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSecurityIntrusionSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSecurityIntrusionSettings200ApplicationJSONObject?: Record<string, any>;
}
