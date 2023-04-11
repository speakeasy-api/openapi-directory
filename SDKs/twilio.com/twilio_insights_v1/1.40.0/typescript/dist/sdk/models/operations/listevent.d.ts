import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListEventServerList: readonly ["https://insights.twilio.com"];
export declare class ListEventSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListEventRequest extends SpeakeasyBase {
    callSid: string;
    edge?: shared.EventEnumTwilioEdgeEnum;
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
export declare class ListEventListEventResponseMeta extends SpeakeasyBase {
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
export declare class ListEventListEventResponse extends SpeakeasyBase {
    events?: shared.InsightsV1CallEvent[];
    meta?: ListEventListEventResponseMeta;
}
export declare class ListEventResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listEventResponse?: ListEventListEventResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
