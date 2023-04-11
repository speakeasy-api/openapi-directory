import { SpeakeasyBase } from "../../../internal/utils";
import { SavedQuery } from "./savedquery";
/**
 * Response of listing saved queries.
 */
export declare class ListSavedQueriesResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * A list of savedQueries.
     */
    savedQueries?: SavedQuery[];
}
