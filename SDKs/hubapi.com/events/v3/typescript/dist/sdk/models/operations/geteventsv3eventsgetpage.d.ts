import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventsV3EventsGetPageSecurity extends SpeakeasyBase {
    hapikey?: string;
    oauth2Legacy?: string;
    privateAppsLegacy?: string;
}
export declare class GetEventsV3EventsGetPageRequest extends SpeakeasyBase {
    /**
     * An additional parameter that may be used to get the next `limit` set of results.
     */
    after?: string;
    before?: string;
    /**
     * Limits the response to the specified event type.  For example `&eventType=e_visited_page` returns only `e_visited_page` events.  If not present all event types are returned.
     */
    eventType?: string;
    /**
     * The maximum number of events to return, defaults to 20.
     */
    limit?: number;
    /**
     * The id of the selected object. If not present, then the `objectProperty` parameter is required.
     */
    objectId?: number;
    /**
     * The type of object being selected. Valid values are hubspot named object types (e.g. `contact`).
     */
    objectType?: string;
    /**
     * The starting time as an ISO 8601 timestamp.
     */
    occurredAfter?: Date;
    /**
     * The ending time as an ISO 8601 timestamp.
     */
    occurredBefore?: Date;
    /**
     * Selects the sort field and order. Defaults to ascending, prefix with `-` for descending order. `occurredAt` is the only field supported for sorting.
     */
    sort?: string[];
}
export declare class GetEventsV3EventsGetPageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * successful operation
     */
    collectionResponseExternalUnifiedEvent?: shared.CollectionResponseExternalUnifiedEvent;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
