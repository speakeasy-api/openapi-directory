import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListBundleCopyServerList: readonly ["https://numbers.twilio.com"];
export declare class ListBundleCopySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListBundleCopyRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Bundle resource.
     */
    bundleSid: string;
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
}
export declare class ListBundleCopyListBundleCopyResponseMeta extends SpeakeasyBase {
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
export declare class ListBundleCopyListBundleCopyResponse extends SpeakeasyBase {
    meta?: ListBundleCopyListBundleCopyResponseMeta;
    results?: shared.NumbersV2RegulatoryComplianceBundleBundleCopy[];
}
export declare class ListBundleCopyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listBundleCopyResponse?: ListBundleCopyListBundleCopyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
