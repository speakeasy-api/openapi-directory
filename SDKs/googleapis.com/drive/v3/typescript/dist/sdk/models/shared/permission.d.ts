import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A permission for a file. A permission grants a user, group, domain, or the world access to a file or a folder hierarchy.
 */
export declare class PermissionInput extends SpeakeasyBase {
    /**
     * Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone.
     */
    allowFileDiscovery?: boolean;
    /**
     * Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.
     */
    deleted?: boolean;
    /**
     * The "pretty" name of the value of the permission. The following is a list of examples for each type of permission:
     *
     * @remarks
     * - user - User's full name, as defined for their Google Account, such as "Joe Smith."
     * - group - Name of the Google Group, such as "The Company Administrators."
     * - domain - String domain name, such as "your-company.com."
     * - anyone - No displayName is present.
     */
    displayName?: string;
    /**
     * The domain to which this permission refers. The following options are currently allowed:
     *
     * @remarks
     * - The entire domain, such as "your-company.com."
     * - A target audience, such as "ID.audience.googledomains.com."
     */
    domain?: string;
    /**
     * The email address of the user or group to which this permission refers.
     */
    emailAddress?: string;
    /**
     * The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions:
     *
     * @remarks
     * - They cannot be set on shared drive items.
     * - They can only be set on user and group permissions.
     * - The time must be in the future.
     * - The time cannot be more than one year in the future.
     */
    expirationTime?: Date;
    /**
     * The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as permissionId. IDs should be treated as opaque values.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#permission".
     */
    kind?: string;
    /**
     * Whether the account associated with this permission is a pending owner. Only populated for user type permissions for files that aren't in a shared drive.
     */
    pendingOwner?: boolean;
    /**
     * A link to the user's profile photo, if available.
     */
    photoLink?: string;
    /**
     * The role granted by this permission. While new values may be supported in the future, the following are currently allowed:
     *
     * @remarks
     * - owner
     * - organizer
     * - fileOrganizer
     * - writer
     * - commenter
     * - reader
     */
    role?: string;
    /**
     * The type of the grantee. Valid values are:
     *
     * @remarks
     * - user
     * - group
     * - domain
     * - anyone  When creating a permission, if type is user or group, you must provide an emailAddress for the user or group. When type is domain, you must provide a domain. There isn't extra information required for the anyone type.
     */
    type?: string;
    /**
     * Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value.
     */
    view?: string;
}
export declare class PermissionPermissionDetails extends SpeakeasyBase {
    /**
     * Whether this permission is inherited. This field is always populated. This is an output-only field.
     */
    inherited?: boolean;
    /**
     * The ID of the item from which this permission is inherited. This is an output-only field.
     */
    inheritedFrom?: string;
    /**
     * The permission type for this user. While new values may be added in future, the following are currently allowed:
     *
     * @remarks
     * - file
     * - member
     */
    permissionType?: string;
    /**
     * The primary role for this user. While new values may be added in the future, the following are currently allowed:
     *
     * @remarks
     * - organizer
     * - fileOrganizer
     * - writer
     * - commenter
     * - reader
     */
    role?: string;
}
export declare class PermissionTeamDrivePermissionDetails extends SpeakeasyBase {
    /**
     * Deprecated - use permissionDetails/inherited instead.
     */
    inherited?: boolean;
    /**
     * Deprecated - use permissionDetails/inheritedFrom instead.
     */
    inheritedFrom?: string;
    /**
     * Deprecated - use permissionDetails/role instead.
     */
    role?: string;
    /**
     * Deprecated - use permissionDetails/permissionType instead.
     */
    teamDrivePermissionType?: string;
}
/**
 * A permission for a file. A permission grants a user, group, domain, or the world access to a file or a folder hierarchy.
 */
export declare class Permission extends SpeakeasyBase {
    /**
     * Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone.
     */
    allowFileDiscovery?: boolean;
    /**
     * Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.
     */
    deleted?: boolean;
    /**
     * The "pretty" name of the value of the permission. The following is a list of examples for each type of permission:
     *
     * @remarks
     * - user - User's full name, as defined for their Google Account, such as "Joe Smith."
     * - group - Name of the Google Group, such as "The Company Administrators."
     * - domain - String domain name, such as "your-company.com."
     * - anyone - No displayName is present.
     */
    displayName?: string;
    /**
     * The domain to which this permission refers. The following options are currently allowed:
     *
     * @remarks
     * - The entire domain, such as "your-company.com."
     * - A target audience, such as "ID.audience.googledomains.com."
     */
    domain?: string;
    /**
     * The email address of the user or group to which this permission refers.
     */
    emailAddress?: string;
    /**
     * The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions:
     *
     * @remarks
     * - They cannot be set on shared drive items.
     * - They can only be set on user and group permissions.
     * - The time must be in the future.
     * - The time cannot be more than one year in the future.
     */
    expirationTime?: Date;
    /**
     * The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as permissionId. IDs should be treated as opaque values.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#permission".
     */
    kind?: string;
    /**
     * Whether the account associated with this permission is a pending owner. Only populated for user type permissions for files that aren't in a shared drive.
     */
    pendingOwner?: boolean;
    /**
     * Details of whether the permissions on this shared drive item are inherited or are directly on this item. This is an output-only field that's present only for shared drive items.
     */
    permissionDetails?: PermissionPermissionDetails[];
    /**
     * A link to the user's profile photo, if available.
     */
    photoLink?: string;
    /**
     * The role granted by this permission. While new values may be supported in the future, the following are currently allowed:
     *
     * @remarks
     * - owner
     * - organizer
     * - fileOrganizer
     * - writer
     * - commenter
     * - reader
     */
    role?: string;
    /**
     * Deprecated - use permissionDetails instead.
     */
    teamDrivePermissionDetails?: PermissionTeamDrivePermissionDetails[];
    /**
     * The type of the grantee. Valid values are:
     *
     * @remarks
     * - user
     * - group
     * - domain
     * - anyone  When creating a permission, if type is user or group, you must provide an emailAddress for the user or group. When type is domain, you must provide a domain. There isn't extra information required for the anyone type.
     */
    type?: string;
    /**
     * Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value.
     */
    view?: string;
}
