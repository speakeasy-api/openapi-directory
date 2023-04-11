import { SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";
/**
 * A list of permissions for a file.
 */
export declare class PermissionList extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#permissionList".
     */
    kind?: string;
    /**
     * The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;
    /**
     * The list of permissions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    permissions?: Permission[];
}
