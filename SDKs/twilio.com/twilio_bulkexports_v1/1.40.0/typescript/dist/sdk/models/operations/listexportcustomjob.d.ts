import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListExportCustomJobServerList: readonly ["https://bulkexports.twilio.com"];
export declare class ListExportCustomJobSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListExportCustomJobRequest extends SpeakeasyBase {
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
     * The type of communication – Messages, Calls, Conferences, and Participants
     */
    resourceType: string;
}
export declare class ListExportCustomJobListExportCustomJobResponseMeta extends SpeakeasyBase {
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
export declare class ListExportCustomJobListExportCustomJobResponse extends SpeakeasyBase {
    jobs?: shared.BulkexportsV1ExportExportCustomJob[];
    meta?: ListExportCustomJobListExportCustomJobResponseMeta;
}
export declare class ListExportCustomJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listExportCustomJobResponse?: ListExportCustomJobListExportCustomJobResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
