import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a grouping of related user role permissions.
 */
export declare class UserRolePermissionGroup extends SpeakeasyBase {
    /**
     * ID of this user role permission.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroup".
     */
    kind?: string;
    /**
     * Name of this user role permission group.
     */
    name?: string;
}
