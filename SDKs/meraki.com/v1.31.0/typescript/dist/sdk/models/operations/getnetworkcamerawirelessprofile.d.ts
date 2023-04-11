import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkCameraWirelessProfileRequest extends SpeakeasyBase {
    networkId: string;
    wirelessProfileId: string;
}
export declare class GetNetworkCameraWirelessProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkCameraWirelessProfile200ApplicationJSONObject?: Record<string, any>;
}
