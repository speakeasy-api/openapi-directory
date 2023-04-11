import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
/**
 * Successful response
 */
export declare class SearchItemsByViewUrlResponse extends SpeakeasyBase {
    items?: Item[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
