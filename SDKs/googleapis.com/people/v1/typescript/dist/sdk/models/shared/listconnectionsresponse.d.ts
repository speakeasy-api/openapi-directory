import { SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";
/**
 * The response to a request for the authenticated user's connections.
 */
export declare class ListConnectionsResponse extends SpeakeasyBase {
    /**
     * The list of people that the requestor is connected to.
     */
    connections?: Person[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * A token, which can be sent as `sync_token` to retrieve changes since the last request. Request must set `request_sync_token` to return the sync token. When the response is paginated, only the last page will contain `nextSyncToken`.
     */
    nextSyncToken?: string;
    /**
     * The total number of items in the list without pagination.
     */
    totalItems?: number;
    /**
     * **DEPRECATED** (Please use totalItems) The total number of people in the list without pagination.
     */
    totalPeople?: number;
}
