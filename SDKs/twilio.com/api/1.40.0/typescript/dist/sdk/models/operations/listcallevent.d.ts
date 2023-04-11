import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListCallEventServerList: readonly ["https://api.twilio.com"];
export declare class ListCallEventSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListCallEventRequest extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Account.
     */
    accountSid: string;
    /**
     * The unique SID identifier of the Call.
     */
    callSid: string;
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
export declare class ListCallEventListCallEventResponse extends SpeakeasyBase {
    end?: number;
    events?: shared.ApiV2010AccountCallCallEvent[];
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListCallEventResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listCallEventResponse?: ListCallEventListCallEventResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
