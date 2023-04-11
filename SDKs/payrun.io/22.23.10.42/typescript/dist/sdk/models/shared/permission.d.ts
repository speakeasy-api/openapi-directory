import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The permissions' policy
 */
export declare enum PermissionPermissionPolicyEnum {
    Allow = "Allow",
    Deny = "Deny"
}
/**
 * The permissions' verbs
 */
export declare enum PermissionPermissionVerbsEnum {
    Read = "Read",
    Write = "Write",
    Delete = "Delete",
    All = "All"
}
export declare class PermissionPermission extends SpeakeasyBase {
    /**
     * The permissions' description
     */
    description?: string;
    /**
     * The permissions' expression
     */
    expression?: string;
    /**
     * The permissions' name
     */
    name?: string;
    /**
     * The permissions' policy
     */
    policy?: PermissionPermissionPolicyEnum;
    /**
     * The permissions' verbs
     */
    verbs?: PermissionPermissionVerbsEnum;
}
/**
 * The permission object.
 */
export declare class Permission extends SpeakeasyBase {
    permission?: PermissionPermission;
}
