import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
/**
 * The ListGroups response.
 */
export declare class ListGroupsResponse extends SpeakeasyBase {
    /**
     * The groups that match the specified filters.
     */
    group?: Group[];
    /**
     * If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
     */
    nextPageToken?: string;
}
