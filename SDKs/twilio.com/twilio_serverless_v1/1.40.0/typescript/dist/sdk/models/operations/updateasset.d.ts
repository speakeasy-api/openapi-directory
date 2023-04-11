import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateAssetServerList: readonly ["https://serverless.twilio.com"];
export declare class UpdateAssetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateAssetUpdateAssetRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the Asset resource. It can be a maximum of 255 characters.
     */
    friendlyName: string;
}
export declare class UpdateAssetRequest extends SpeakeasyBase {
    requestBody?: UpdateAssetUpdateAssetRequest;
    /**
     * The SID of the Service to update the Asset resource from.
     */
    serviceSid: string;
    /**
     * The SID that identifies the Asset resource to update.
     */
    sid: string;
}
export declare class UpdateAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    serverlessV1ServiceAsset?: shared.ServerlessV1ServiceAsset;
}
