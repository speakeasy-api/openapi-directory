import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateAssetServerList: readonly ["https://serverless.twilio.com"];
export declare class CreateAssetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateAssetCreateAssetRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the Asset resource. It can be a maximum of 255 characters.
     */
    friendlyName: string;
}
export declare class CreateAssetRequest extends SpeakeasyBase {
    requestBody?: CreateAssetCreateAssetRequest;
    /**
     * The SID of the Service to create the Asset resource under.
     */
    serviceSid: string;
}
export declare class CreateAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    serverlessV1ServiceAsset?: shared.ServerlessV1ServiceAsset;
}
