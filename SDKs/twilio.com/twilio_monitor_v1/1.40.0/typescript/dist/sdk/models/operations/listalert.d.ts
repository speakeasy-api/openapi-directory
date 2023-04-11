import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListAlertServerList: readonly ["https://monitor.twilio.com"];
export declare class ListAlertSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListAlertRequest extends SpeakeasyBase {
    /**
     * Only include alerts that occurred on or before this date and time. Specify the date and time in GMT and format as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ssZ`. Queries for alerts older than 30 days are not supported.
     */
    endDate?: Date;
    /**
     * Only show alerts for this log-level.  Can be: `error`, `warning`, `notice`, or `debug`.
     */
    logLevel?: string;
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
     * Only include alerts that occurred on or after this date and time. Specify the date and time in GMT and format as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ssZ`. Queries for alerts older than 30 days are not supported.
     */
    startDate?: Date;
}
export declare class ListAlertListAlertResponseMeta extends SpeakeasyBase {
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
export declare class ListAlertListAlertResponse extends SpeakeasyBase {
    alerts?: shared.MonitorV1Alert[];
    meta?: ListAlertListAlertResponseMeta;
}
export declare class ListAlertResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listAlertResponse?: ListAlertListAlertResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
