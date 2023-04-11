import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSupportingDocumentTypeServerList: readonly ["https://numbers.twilio.com"];
export declare class ListSupportingDocumentTypeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSupportingDocumentTypeRequest extends SpeakeasyBase {
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
export declare class ListSupportingDocumentTypeListSupportingDocumentTypeResponseMeta extends SpeakeasyBase {
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
export declare class ListSupportingDocumentTypeListSupportingDocumentTypeResponse extends SpeakeasyBase {
    meta?: ListSupportingDocumentTypeListSupportingDocumentTypeResponseMeta;
    supportingDocumentTypes?: shared.NumbersV2RegulatoryComplianceSupportingDocumentType[];
}
export declare class ListSupportingDocumentTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSupportingDocumentTypeResponse?: ListSupportingDocumentTypeListSupportingDocumentTypeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
