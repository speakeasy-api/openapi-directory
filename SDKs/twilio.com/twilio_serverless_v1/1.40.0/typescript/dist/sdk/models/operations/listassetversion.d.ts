import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListAssetVersionServerList: readonly ["https://serverless.twilio.com"];
export declare class ListAssetVersionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListAssetVersionRequest extends SpeakeasyBase {
    /**
     * The SID of the Asset resource that is the parent of the Asset Version resources to read.
     */
    assetSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * The SID of the Service to read the Asset Version resource from.
     */
    serviceSid: string;
}
export declare class ListAssetVersionListAssetVersionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListAssetVersionListAssetVersionResponse extends SpeakeasyBase {
    assetVersions?: shared.ServerlessV1ServiceAssetAssetVersion[];
    meta?: ListAssetVersionListAssetVersionResponseMeta;
}
export declare class ListAssetVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listAssetVersionResponse?: ListAssetVersionListAssetVersionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
