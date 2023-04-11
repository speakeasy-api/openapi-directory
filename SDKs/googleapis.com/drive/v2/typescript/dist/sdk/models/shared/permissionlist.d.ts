import { SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";
/**
 * A list of permissions associated with a file.
 */
export declare class PermissionList extends SpeakeasyBase {
    /**
     * The ETag of the list.
     */
    etag?: string;
    /**
     * The list of permissions.
     */
    items?: Permission[];
    /**
     * This is always drive#permissionList.
     */
    kind?: string;
    /**
     * The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;
    /**
     * A link back to this list.
     */
    selfLink?: string;
}
