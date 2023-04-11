import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListLogServerList: readonly ["https://serverless.twilio.com"];
export declare class ListLogSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListLogRequest extends SpeakeasyBase {
    /**
     * The date/time (in GMT, ISO 8601) before which the Log resources must have been created. Defaults to current date/time.
     */
    endDate?: Date;
    /**
     * The SID of the environment with the Log resources to read.
     */
    environmentSid: string;
    /**
     * The SID of the function whose invocation produced the Log resources to read.
     */
    functionSid?: string;
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
     * The SID of the Service to read the Log resource from.
     */
    serviceSid: string;
    /**
     * The date/time (in GMT, ISO 8601) after which the Log resources must have been created. Defaults to 1 day prior to current date/time.
     */
    startDate?: Date;
}
export declare class ListLogListLogResponseMeta extends SpeakeasyBase {
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
export declare class ListLogListLogResponse extends SpeakeasyBase {
    logs?: shared.ServerlessV1ServiceEnvironmentLog[];
    meta?: ListLogListLogResponseMeta;
}
export declare class ListLogResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listLogResponse?: ListLogListLogResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
