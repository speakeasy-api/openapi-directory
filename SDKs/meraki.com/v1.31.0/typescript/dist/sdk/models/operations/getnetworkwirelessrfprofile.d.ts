import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkWirelessRfProfileRequest extends SpeakeasyBase {
    networkId: string;
    rfProfileId: string;
}
export declare class GetNetworkWirelessRfProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessRfProfile200ApplicationJSONObject?: Record<string, any>;
}
