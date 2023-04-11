import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class ListItemNamesForUnmappedIdentityResponse extends SpeakeasyBase {
    itemNames?: string[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
