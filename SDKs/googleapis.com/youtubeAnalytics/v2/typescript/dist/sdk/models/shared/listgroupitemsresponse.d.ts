import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { GroupItem } from "./groupitem";
/**
 * Response message for GroupsService.ListGroupItems.
 */
export declare class ListGroupItemsResponse extends SpeakeasyBase {
    /**
     * Request Error information. The presence of an error field signals that the operation has failed.
     */
    errors?: Errors;
    /**
     * The Etag of this resource.
     */
    etag?: string;
    /**
     * A list of groups that match the API request parameters. Each item in the list represents a `groupItem` resource.
     */
    items?: GroupItem[];
    /**
     * Identifies the API resource's type. The value will be `youtube#groupItemListResponse`.
     */
    kind?: string;
}
