import { SpeakeasyBase } from "../../../internal/utils";
import { LocationList } from "./locationlist";
/**
 * Successful response
 */
export declare class ListLocationListsResponse extends SpeakeasyBase {
    /**
     * The list of location lists. This list will be absent if empty.
     */
    locationLists?: LocationList[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListLocationLists` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
