import { SpeakeasyBase } from "../../../internal/utils";
import { UserPermission } from "./userpermission";
/**
 * List user permissions response.
 */
export declare class ListUserPermissionsResponse extends SpeakeasyBase {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
    /**
     * All GTM UserPermissions of a GTM Account.
     */
    userPermission?: UserPermission[];
}
