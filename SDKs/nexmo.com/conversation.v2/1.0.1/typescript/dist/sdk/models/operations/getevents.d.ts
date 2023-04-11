import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventsRequest extends SpeakeasyBase {
    /**
     * The ID of the conversation
     */
    conversationId: string;
    /**
     * The cursor to start returning results from.
     *
     * @remarks
     *
     * You are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value
     *
     */
    cursor?: string;
    /**
     * The ID to end returning events at
     */
    endId?: string;
    /**
     * The type of event to search for. Does not currently support custom events
     */
    eventType?: string;
    /**
     * Show the most (`desc`) / least (`asc`) recently created entries first
     */
    order?: shared.OrderEnum;
    /**
     * The number of results returned per page.   The default value is `10`. The maximum value is `100`.
     */
    pageSize?: number;
    /**
     * The ID to start returning events at
     */
    startId?: string;
}
export declare class GetEvents200ApplicationJSONEmbeddedData extends SpeakeasyBase {
    /**
     * List of events matching the provided filter
     */
    events?: any[];
}
export declare class GetEvents200ApplicationJSONEmbedded extends SpeakeasyBase {
    data?: GetEvents200ApplicationJSONEmbeddedData;
}
export declare class GetEvents200ApplicationJSONLinksFirst extends SpeakeasyBase {
    href?: string;
}
export declare class GetEvents200ApplicationJSONLinksNext extends SpeakeasyBase {
    href?: string;
}
export declare class GetEvents200ApplicationJSONLinksPrev extends SpeakeasyBase {
    href?: string;
}
export declare class GetEvents200ApplicationJSONLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetEvents200ApplicationJSONLinks extends SpeakeasyBase {
    first?: GetEvents200ApplicationJSONLinksFirst;
    next?: GetEvents200ApplicationJSONLinksNext;
    prev?: GetEvents200ApplicationJSONLinksPrev;
    self?: GetEvents200ApplicationJSONLinksSelf;
}
/**
 * OK
 */
export declare class GetEvents200ApplicationJSON extends SpeakeasyBase {
    embedded?: GetEvents200ApplicationJSONEmbedded;
    links?: GetEvents200ApplicationJSONLinks;
    /**
     * The number of results returned on this page.
     */
    pageSize?: number;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getEvents200ApplicationJSONObject?: GetEvents200ApplicationJSON;
}
