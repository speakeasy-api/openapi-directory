import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListFaxMediaServerList: readonly ["https://fax.twilio.com"];
export declare class ListFaxMediaSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListFaxMediaRequest extends SpeakeasyBase {
    /**
     * The SID of the fax with the FaxMedia resources to read.
     */
    faxSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
}
export declare class ListFaxMediaListFaxMediaResponseMeta extends SpeakeasyBase {
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
export declare class ListFaxMediaListFaxMediaResponse extends SpeakeasyBase {
    media?: shared.FaxV1FaxFaxMedia[];
    meta?: ListFaxMediaListFaxMediaResponseMeta;
}
export declare class ListFaxMediaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listFaxMediaResponse?: ListFaxMediaListFaxMediaResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
