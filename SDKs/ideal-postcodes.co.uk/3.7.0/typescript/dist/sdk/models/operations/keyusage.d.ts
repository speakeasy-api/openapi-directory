import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KeyUsageRequest extends SpeakeasyBase {
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
     * A start date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no start time is provided, the start time will be assigned to a time 21 days prior to the end time.
     */
    start?: number;
    tags?: string;
}
export declare class KeyUsageResponse extends SpeakeasyBase {
    /**
     * Success
     */
    apiKeyUsageResponse?: shared.ApiKeyUsageResponse;
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
