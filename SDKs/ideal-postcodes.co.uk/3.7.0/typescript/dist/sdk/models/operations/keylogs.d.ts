import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KeyLogsRequest extends SpeakeasyBase {
    /**
     * An end date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no end time is provided, the current time will be used.
     */
    end?: number;
    key: string;
    /**
     * Sublicensed keys only. This will restrict the analysed dataset to a specific licensee.
     */
    licensee?: string;
    /**
     * An start date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no start time is provided, the start time will be assigned to a time 21 days prior to the end time.
     */
    start?: number;
}
export declare class KeyLogsResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * Success
     */
    keyLogs200TextCsvString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
