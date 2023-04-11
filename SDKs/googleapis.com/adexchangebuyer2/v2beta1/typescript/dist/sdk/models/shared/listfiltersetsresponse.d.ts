import { SpeakeasyBase } from "../../../internal/utils";
import { FilterSet } from "./filterset";
/**
 * Response message for listing filter sets.
 */
export declare class ListFilterSetsResponse extends SpeakeasyBase {
    /**
     * The filter sets belonging to the buyer.
     */
    filterSets?: FilterSet[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListFilterSetsRequest.pageToken field in the subsequent call to the accounts.filterSets.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
