import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkCameraQualityRetentionProfileRequest extends SpeakeasyBase {
    networkId: string;
    qualityRetentionProfileId: string;
}
export declare class DeleteNetworkCameraQualityRetentionProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
