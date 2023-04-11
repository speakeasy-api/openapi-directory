import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHealthDashboardSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetHealthDashboardRequest extends SpeakeasyBase {
    /**
     * Country in ISO 3166, uppercase
     */
    country?: string;
    /**
     * Unix timestamp in seconds. Send a day timestamp to view the database hourly status for that day or send the current time to know the current database status
     */
    unixTimestampSeconds?: string;
    /**
     * Offset between the local time and the UTC time in seconds. (e.g., Colombia is at UTC -18000 seconds)
     *
     * @remarks
     *
     */
    unixtimezoneOffsetSeconds?: string;
}
export declare class GetHealthDashboardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    databases?: shared.Database[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
