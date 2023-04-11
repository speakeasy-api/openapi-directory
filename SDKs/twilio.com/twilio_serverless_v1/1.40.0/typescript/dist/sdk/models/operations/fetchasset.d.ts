import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchAssetServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchAssetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchAssetRequest extends SpeakeasyBase {
    /**
     * The SID of the Service to fetch the Asset resource from.
     */
    serviceSid: string;
    /**
     * The SID that identifies the Asset resource to fetch.
     */
    sid: string;
}
export declare class FetchAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    serverlessV1ServiceAsset?: shared.ServerlessV1ServiceAsset;
}
