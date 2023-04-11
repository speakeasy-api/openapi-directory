import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
/**
 * The response message for GroupsService.SearchGroups.
 */
export declare class SearchGroupsResponse extends SpeakeasyBase {
    /**
     * The `Group` resources that match the search query.
     */
    groups?: Group[];
    /**
     * A continuation token to retrieve the next page of results, or empty if there are no more results available.
     */
    nextPageToken?: string;
}
