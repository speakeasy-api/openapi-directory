import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkAlertSettingsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkAlertSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkAlertSettings200ApplicationJSONObject?: Record<string, any>;
}
