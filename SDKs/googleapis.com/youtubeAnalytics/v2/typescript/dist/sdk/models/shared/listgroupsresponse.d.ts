import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { Group } from "./group";
/**
 * Response message for GroupsService.ListGroups.
 */
export declare class ListGroupsResponse extends SpeakeasyBase {
    /**
     * Request Error information. The presence of an error field signals that the operation has failed.
     */
    errors?: Errors;
    /**
     * The Etag of this resource.
     */
    etag?: string;
    /**
     * A list of groups that match the API request parameters. Each item in the list represents a `group` resource.
     */
    items?: Group[];
    /**
     * Identifies the API resource's type. The value will be `youtube#groupListResponse`.
     */
    kind?: string;
    /**
     * The token that can be used as the value of the `pageToken` parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string;
}
