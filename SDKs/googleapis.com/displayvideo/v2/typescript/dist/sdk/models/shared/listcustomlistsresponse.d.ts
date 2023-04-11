import { SpeakeasyBase } from "../../../internal/utils";
import { CustomList } from "./customlist";
/**
 * Successful response
 */
export declare class ListCustomListsResponse extends SpeakeasyBase {
    /**
     * The list of custom lists. This list will be absent if empty.
     */
    customLists?: CustomList[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCustomLists` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
