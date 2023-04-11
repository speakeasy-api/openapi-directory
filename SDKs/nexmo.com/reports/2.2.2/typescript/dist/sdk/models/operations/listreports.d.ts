import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListReportsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListReportsRequest extends SpeakeasyBase {
    /**
     * The account for which the list of reports will be queried.
     */
    accountId: string;
    /**
     * ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date from which the list of reports will be queried. Format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`.
     */
    dateFrom?: Date;
    /**
     * ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date until which the list of reports will be queried. Format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`.
     */
    dateTo?: Date;
    /**
     * A comma-separated list of report status values. Reports with any of the statuses specified are returned. The values in the comma-seperated list specified for `status` can be any of `PENDING`, `PROCESSING`, `SUCCESS`, `ABORTED`, `FAILED`, `TRUNCATED`.
     */
    status: string;
}
/**
 * Unauthorized
 */
export declare class ListReports401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Bad Request
 */
export declare class ListReports400ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * OK
 */
export declare class ListReports200ApplicationJSON extends SpeakeasyBase {
    /**
     * The number of reports in the list.
     */
    itemsCount?: number;
    /**
     * The list of reports.
     */
    reports?: any[];
    /**
     * URI of this search.
     */
    selfLink?: string;
}
export declare class ListReportsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    listReports200ApplicationJSONObject?: ListReports200ApplicationJSON;
    /**
     * Bad Request
     */
    listReports400ApplicationJSONObject?: ListReports400ApplicationJSON;
    /**
     * Unauthorized
     */
    listReports401ApplicationJSONObject?: ListReports401ApplicationJSON;
}
