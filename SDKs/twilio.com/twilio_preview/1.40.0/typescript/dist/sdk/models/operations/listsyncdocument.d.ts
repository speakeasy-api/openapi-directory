import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSyncDocumentServerList: readonly ["https://preview.twilio.com"];
export declare class ListSyncDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSyncDocumentRequest extends SpeakeasyBase {
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
    serviceSid: string;
}
export declare class ListSyncDocumentListSyncDocumentResponseMeta extends SpeakeasyBase {
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
export declare class ListSyncDocumentListSyncDocumentResponse extends SpeakeasyBase {
    documents?: shared.PreviewSyncServiceDocument[];
    meta?: ListSyncDocumentListSyncDocumentResponseMeta;
}
export declare class ListSyncDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSyncDocumentResponse?: ListSyncDocumentListSyncDocumentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
