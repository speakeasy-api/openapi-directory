import { SpeakeasyBase } from "../../../internal/utils";
import { UserRolePermission } from "./userrolepermission";
/**
 * User Role Permission List Response
 */
export declare class UserRolePermissionsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionsListResponse".
     */
    kind?: string;
    /**
     * User role permission collection.
     */
    userRolePermissions?: UserRolePermission[];
}
