import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkCameraQualityRetentionProfilesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkCameraQualityRetentionProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkCameraQualityRetentionProfiles200ApplicationJSONObjects?: Record<string, any>[];
}
