import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
/**
 * The response message for GroupsService.ListGroups.
 */
export declare class ListGroupsResponse extends SpeakeasyBase {
    /**
     * The `Group` resources under the specified `parent`.
     */
    groups?: Group[];
    /**
     * A continuation token to retrieve the next page of results, or empty if there are no more results available.
     */
    nextPageToken?: string;
}
