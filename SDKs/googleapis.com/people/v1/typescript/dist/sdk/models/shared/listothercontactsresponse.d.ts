import { SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";
/**
 * The response to a request for the authenticated user's "Other contacts".
 */
export declare class ListOtherContactsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * A token, which can be sent as `sync_token` to retrieve changes since the last request. Request must set `request_sync_token` to return the sync token.
     */
    nextSyncToken?: string;
    /**
     * The list of "Other contacts" returned as Person resources. "Other contacts" support a limited subset of fields. See ListOtherContactsRequest.request_mask for more detailed information.
     */
    otherContacts?: Person[];
    /**
     * The total number of other contacts in the list without pagination.
     */
    totalSize?: number;
}
