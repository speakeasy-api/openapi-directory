import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListFaxServerList: readonly ["https://fax.twilio.com"];
export declare class ListFaxSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListFaxRequest extends SpeakeasyBase {
    /**
     * Retrieve only those faxes with a `date_created` that is later than this value, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreatedAfter?: Date;
    /**
     * Retrieve only those faxes with a `date_created` that is before or equal to this value, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreatedOnOrBefore?: Date;
    /**
     * Retrieve only those faxes sent from this phone number, specified in [E.164](https://www.twilio.com/docs/glossary/what-e164) format.
     */
    from?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * Retrieve only those faxes sent to this phone number, specified in [E.164](https://www.twilio.com/docs/glossary/what-e164) format.
     */
    to?: string;
}
export declare class ListFaxListFaxResponseMeta extends SpeakeasyBase {
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
export declare class ListFaxListFaxResponse extends SpeakeasyBase {
    faxes?: shared.FaxV1Fax[];
    meta?: ListFaxListFaxResponseMeta;
}
export declare class ListFaxResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listFaxResponse?: ListFaxListFaxResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
