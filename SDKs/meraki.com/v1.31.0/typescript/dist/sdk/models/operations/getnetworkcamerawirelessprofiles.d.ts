import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkCameraWirelessProfilesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkCameraWirelessProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkCameraWirelessProfiles200ApplicationJSONObjects?: Record<string, any>[];
}
