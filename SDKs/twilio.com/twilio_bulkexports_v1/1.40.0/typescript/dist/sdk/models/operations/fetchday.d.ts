import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDayServerList: readonly ["https://bulkexports.twilio.com"];
export declare class FetchDaySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDayRequest extends SpeakeasyBase {
    /**
     * The ISO 8601 format date of the resources in the file, for a UTC day
     */
    day: string;
    /**
     * The type of communication – Messages, Calls, Conferences, and Participants
     */
    resourceType: string;
}
export declare class FetchDayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Temporary Redirect
     */
    bulkexportsV1ExportDayInstance?: shared.BulkexportsV1ExportDayInstance;
}
