import { SpeakeasyBase } from "../../../internal/utils";
import { UserRolePermissionGroup } from "./userrolepermissiongroup";
/**
 * User Role Permission Group List Response
 */
export declare class UserRolePermissionGroupsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroupsListResponse".
     */
    kind?: string;
    /**
     * User role permission group collection.
     */
    userRolePermissionGroups?: UserRolePermissionGroup[];
}
