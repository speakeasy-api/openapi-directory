import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListEventServerList: readonly ["https://monitor.twilio.com"];
export declare class ListEventSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListEventRequest extends SpeakeasyBase {
    /**
     * Only include events initiated by this Actor. Useful for auditing actions taken by specific users or API credentials.
     */
    actorSid?: string;
    /**
     * Only include events that occurred on or before this date. Specify the date in GMT and [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    endDate?: Date;
    /**
     * Only include events of this [Event Type](https://www.twilio.com/docs/usage/monitor-events#event-types).
     */
    eventType?: string;
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
     * Only include events that refer to this resource. Useful for discovering the history of a specific resource.
     */
    resourceSid?: string;
    /**
     * Only include events that originated from this IP address. Useful for tracking suspicious activity originating from the API or the Twilio Console.
     */
    sourceIpAddress?: string;
    /**
     * Only include events that occurred on or after this date. Specify the date in GMT and [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    startDate?: Date;
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
    events?: shared.MonitorV1Event[];
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
