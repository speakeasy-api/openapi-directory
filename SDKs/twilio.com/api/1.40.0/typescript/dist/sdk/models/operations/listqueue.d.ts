import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListQueueServerList: readonly ["https://api.twilio.com"];
export declare class ListQueueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListQueueRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Queue resources to read.
     */
    accountSid: string;
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
/**
 * OK
 */
export declare class ListQueueListQueueResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    queues?: shared.ApiV2010AccountQueue[];
    start?: number;
    uri?: string;
}
export declare class ListQueueResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listQueueResponse?: ListQueueListQueueResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
