import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSupportingDocumentServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListSupportingDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSupportingDocumentRequest extends SpeakeasyBase {
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
export declare class ListSupportingDocumentListSupportingDocumentResponseMeta extends SpeakeasyBase {
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
export declare class ListSupportingDocumentListSupportingDocumentResponse extends SpeakeasyBase {
    meta?: ListSupportingDocumentListSupportingDocumentResponseMeta;
    results?: shared.TrusthubV1SupportingDocument[];
}
export declare class ListSupportingDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSupportingDocumentResponse?: ListSupportingDocumentListSupportingDocumentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
