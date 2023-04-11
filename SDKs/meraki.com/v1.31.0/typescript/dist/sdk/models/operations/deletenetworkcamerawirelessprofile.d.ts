import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkCameraWirelessProfileRequest extends SpeakeasyBase {
    networkId: string;
    wirelessProfileId: string;
}
export declare class DeleteNetworkCameraWirelessProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
