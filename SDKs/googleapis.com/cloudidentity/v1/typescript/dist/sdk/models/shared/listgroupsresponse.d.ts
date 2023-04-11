import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
/**
 * Response message for ListGroups operation.
 */
export declare class ListGroupsResponse extends SpeakeasyBase {
    /**
     * Groups returned in response to list request. The results are not sorted.
     */
    groups?: Group[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results available for listing.
     */
    nextPageToken?: string;
}
