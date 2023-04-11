import { SpeakeasyBase } from "../../../internal/utils";
import { UserRolePermission } from "./userrolepermission";
/**
 * Contains properties of auser role, which is used to manage user access.
 */
export declare class UserRole extends SpeakeasyBase {
    /**
     * Account ID of this user role. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Whether this is a default user role. Default user roles are created by the system for the account/subaccount and cannot be modified or deleted. Each default user role comes with a basic set of preassigned permissions.
     */
    defaultUserRole?: boolean;
    /**
     * ID of this user role. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRole".
     */
    kind?: string;
    /**
     * Name of this user role. This is a required field. Must be less than 256 characters long. If this user role is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this user role is a top-level user role, and the name must be unique among top-level user roles of the same account.
     */
    name?: string;
    /**
     * ID of the user role that this user role is based on or copied from. This is a required field.
     */
    parentUserRoleId?: string;
    /**
     * List of permissions associated with this user role.
     */
    permissions?: UserRolePermission[];
    /**
     * Subaccount ID of this user role. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
}
