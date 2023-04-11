import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserUserPermissionPermission extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
/**
 * The users' permissions
 */
export declare class UserUserPermission extends SpeakeasyBase {
    permission?: UserUserPermissionPermission[];
}
/**
 * The users' roles
 */
export declare class UserUserRoles extends SpeakeasyBase {
    role?: string[];
}
export declare class UserUser extends SpeakeasyBase {
    /**
     * The users' meta data
     */
    metaData?: Record<string, any>;
    /**
     * The users' permissions
     */
    permissions?: UserUserPermission;
    /**
     * The users' roles
     */
    roles?: UserUserRoles;
    /**
     * The users' user identifier
     */
    userIdentifier?: string;
}
/**
 * The user object.
 */
export declare class User extends SpeakeasyBase {
    user?: UserUser;
}
