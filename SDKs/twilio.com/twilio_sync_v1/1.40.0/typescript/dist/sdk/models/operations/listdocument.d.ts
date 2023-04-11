import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListDocumentServerList: readonly ["https://sync.twilio.com"];
export declare class ListDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListDocumentRequest extends SpeakeasyBase {
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
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document resources to read.
     */
    serviceSid: string;
}
export declare class ListDocumentListDocumentResponseMeta extends SpeakeasyBase {
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
export declare class ListDocumentListDocumentResponse extends SpeakeasyBase {
    documents?: shared.SyncV1ServiceDocument[];
    meta?: ListDocumentListDocumentResponseMeta;
}
export declare class ListDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listDocumentResponse?: ListDocumentListDocumentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
