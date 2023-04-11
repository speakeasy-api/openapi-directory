import { SpeakeasyBase } from "../../../internal/utils";
import { SavedQuery } from "./savedquery";
/**
 * Definition of the response for method ListSaveQuery.
 */
export declare class ListSavedQueriesResponse extends SpeakeasyBase {
    /**
     * Page token to retrieve the next page of results in the list. If this is empty, then there are no more saved queries to list.
     */
    nextPageToken?: string;
    /**
     * List of saved queries.
     */
    savedQueries?: SavedQuery[];
}
