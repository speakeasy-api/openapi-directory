import { SpeakeasyBase } from "../../../internal/utils";
export declare class RoleRolePrivileges extends SpeakeasyBase {
    /**
     * The name of the privilege.
     */
    privilegeName?: string;
    /**
     * The obfuscated ID of the service this privilege is for. This value is returned with [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list).
     */
    serviceId?: string;
}
/**
 * Successful response
 */
export declare class Role extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Returns `true` if the role is a super admin role.
     */
    isSuperAdminRole?: boolean;
    /**
     * Returns `true` if this is a pre-defined system role.
     */
    isSystemRole?: boolean;
    /**
     * The type of the API resource. This is always `admin#directory#role`.
     */
    kind?: string;
    /**
     * A short description of the role.
     */
    roleDescription?: string;
    /**
     * ID of the role.
     */
    roleId?: string;
    /**
     * Name of the role.
     */
    roleName?: string;
    /**
     * The set of privileges that are granted to this role.
     */
    rolePrivileges?: RoleRolePrivileges[];
}
