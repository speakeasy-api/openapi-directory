import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListAssetServerList: readonly ["https://serverless.twilio.com"];
export declare class ListAssetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListAssetRequest extends SpeakeasyBase {
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
     * The SID of the Service to read the Asset resources from.
     */
    serviceSid: string;
}
export declare class ListAssetListAssetResponseMeta extends SpeakeasyBase {
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
export declare class ListAssetListAssetResponse extends SpeakeasyBase {
    assets?: shared.ServerlessV1ServiceAsset[];
    meta?: ListAssetListAssetResponseMeta;
}
export declare class ListAssetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listAssetResponse?: ListAssetListAssetResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
