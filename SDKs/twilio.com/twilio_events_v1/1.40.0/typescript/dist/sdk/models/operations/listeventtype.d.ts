import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListEventTypeServerList: readonly ["https://events.twilio.com"];
export declare class ListEventTypeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListEventTypeRequest extends SpeakeasyBase {
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
     * A string parameter filtering the results to return only the Event Types using a given schema.
     */
    schemaId?: string;
}
export declare class ListEventTypeListEventTypeResponseMeta extends SpeakeasyBase {
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
export declare class ListEventTypeListEventTypeResponse extends SpeakeasyBase {
    meta?: ListEventTypeListEventTypeResponseMeta;
    types?: shared.EventsV1EventType[];
}
export declare class ListEventTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listEventTypeResponse?: ListEventTypeListEventTypeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
