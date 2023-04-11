import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkCameraQualityRetentionProfileRequest extends SpeakeasyBase {
    networkId: string;
    qualityRetentionProfileId: string;
}
export declare class GetNetworkCameraQualityRetentionProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkCameraQualityRetentionProfile200ApplicationJSONObject?: Record<string, any>;
}
