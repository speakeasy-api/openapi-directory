import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchAssetVersionServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchAssetVersionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchAssetVersionRequest extends SpeakeasyBase {
    /**
     * The SID of the Asset resource that is the parent of the Asset Version resource to fetch.
     */
    assetSid: string;
    /**
     * The SID of the Service to fetch the Asset Version resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Asset Version resource to fetch.
     */
    sid: string;
}
export declare class FetchAssetVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    serverlessV1ServiceAssetAssetVersion?: shared.ServerlessV1ServiceAssetAssetVersion;
}
