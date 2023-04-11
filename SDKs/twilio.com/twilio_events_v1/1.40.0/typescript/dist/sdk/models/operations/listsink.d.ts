import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSinkServerList: readonly ["https://events.twilio.com"];
export declare class ListSinkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSinkRequest extends SpeakeasyBase {
    /**
     * A boolean query parameter filtering the results to return sinks used/not used by a subscription.
     */
    inUse?: boolean;
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
     * A String query parameter filtering the results by status `initialized`, `validating`, `active` or `failed`.
     */
    status?: string;
}
export declare class ListSinkListSinkResponseMeta extends SpeakeasyBase {
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
export declare class ListSinkListSinkResponse extends SpeakeasyBase {
    meta?: ListSinkListSinkResponseMeta;
    sinks?: shared.EventsV1Sink[];
}
export declare class ListSinkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSinkResponse?: ListSinkListSinkResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
