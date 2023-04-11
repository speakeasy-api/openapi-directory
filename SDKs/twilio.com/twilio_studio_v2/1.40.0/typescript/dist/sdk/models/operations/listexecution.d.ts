import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListExecutionServerList: readonly ["https://studio.twilio.com"];
export declare class ListExecutionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListExecutionRequest extends SpeakeasyBase {
    /**
     * Only show Execution resources starting on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
     */
    dateCreatedFrom?: Date;
    /**
     * Only show Execution resources starting before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
     */
    dateCreatedTo?: Date;
    /**
     * The SID of the Flow with the Execution resources to read.
     */
    flowSid: string;
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
}
export declare class ListExecutionListExecutionResponseMeta extends SpeakeasyBase {
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
export declare class ListExecutionListExecutionResponse extends SpeakeasyBase {
    executions?: shared.StudioV2FlowExecution[];
    meta?: ListExecutionListExecutionResponseMeta;
}
export declare class ListExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listExecutionResponse?: ListExecutionListExecutionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
