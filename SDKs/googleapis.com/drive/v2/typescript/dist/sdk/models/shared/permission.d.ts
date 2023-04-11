import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A permission for a file.
 */
export declare class PermissionInput extends SpeakeasyBase {
    /**
     * Additional roles for this user. Only commenter is currently allowed, though more may be supported in the future.
     */
    additionalRoles?: string[];
    /**
     * Deprecated.
     */
    authKey?: string;
    /**
     * Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.
     */
    deleted?: boolean;
    /**
     * The domain name of the entity this permission refers to. This is an output-only field which is present when the permission type is user, group or domain.
     */
    domain?: string;
    /**
     * The email address of the user or group this permission refers to. This is an output-only field which is present when the permission type is user or group.
     */
    emailAddress?: string;
    /**
     * The ETag of the permission.
     */
    etag?: string;
    /**
     * The time at which this permission will expire (RFC 3339 date-time). Expiration dates have the following restrictions:
     *
     * @remarks
     * - They cannot be set on shared drive items
     * - They can only be set on user and group permissions
     * - The date must be in the future
     * - The date cannot be more than a year in the future
     */
    expirationDate?: Date;
    /**
     * The ID of the user this permission refers to, and identical to the permissionId in the About and Files resources. When making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission type is anyone, in which case both id and value are ignored.
     */
    id?: string;
    /**
     * This is always drive#permission.
     */
    kind?: string;
    /**
     * The name for this permission.
     */
    name?: string;
    /**
     * Whether the account associated with this permission is a pending owner. Only populated for user type permissions for files that are not in a shared drive.
     */
    pendingOwner?: boolean;
    /**
     * A link to the profile photo, if available.
     */
    photoLink?: string;
    /**
     * The primary role for this user. While new values may be supported in the future, the following are currently allowed:
     *
     * @remarks
     * - owner
     * - organizer
     * - fileOrganizer
     * - writer
     * - reader
     */
    role?: string;
    /**
     * A link back to this permission.
     */
    selfLink?: string;
    /**
     * The account type. Allowed values are:
     *
     * @remarks
     * - user
     * - group
     * - domain
     * - anyone
     */
    type?: string;
    /**
     * The email address or domain name for the entity. This is used during inserts and is not populated in responses. When making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission type is anyone, in which case both id and value are ignored.
     */
    value?: string;
    /**
     * Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value.
     */
    view?: string;
    /**
     * Whether the link is required for this permission.
     */
    withLink?: boolean;
}
export declare class PermissionPermissionDetails extends SpeakeasyBase {
    /**
     * Additional roles for this user. Only commenter is currently possible, though more may be supported in the future.
     */
    additionalRoles?: string[];
    /**
     * Whether this permission is inherited. This field is always populated. This is an output-only field.
     */
    inherited?: boolean;
    /**
     * The ID of the item from which this permission is inherited. This is an output-only field.
     */
    inheritedFrom?: string;
    /**
     * The permission type for this user. While new values may be added in future, the following are currently possible:
     *
     * @remarks
     * - file
     * - member
     */
    permissionType?: string;
    /**
     * The primary role for this user. While new values may be added in the future, the following are currently possible:
     *
     * @remarks
     * - organizer
     * - fileOrganizer
     * - writer
     * - reader
     */
    role?: string;
}
export declare class PermissionTeamDrivePermissionDetails extends SpeakeasyBase {
    /**
     * Deprecated - use permissionDetails/additionalRoles instead.
     */
    additionalRoles?: string[];
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
 * A permission for a file.
 */
export declare class Permission extends SpeakeasyBase {
    /**
     * Additional roles for this user. Only commenter is currently allowed, though more may be supported in the future.
     */
    additionalRoles?: string[];
    /**
     * Deprecated.
     */
    authKey?: string;
    /**
     * Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.
     */
    deleted?: boolean;
    /**
     * The domain name of the entity this permission refers to. This is an output-only field which is present when the permission type is user, group or domain.
     */
    domain?: string;
    /**
     * The email address of the user or group this permission refers to. This is an output-only field which is present when the permission type is user or group.
     */
    emailAddress?: string;
    /**
     * The ETag of the permission.
     */
    etag?: string;
    /**
     * The time at which this permission will expire (RFC 3339 date-time). Expiration dates have the following restrictions:
     *
     * @remarks
     * - They cannot be set on shared drive items
     * - They can only be set on user and group permissions
     * - The date must be in the future
     * - The date cannot be more than a year in the future
     */
    expirationDate?: Date;
    /**
     * The ID of the user this permission refers to, and identical to the permissionId in the About and Files resources. When making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission type is anyone, in which case both id and value are ignored.
     */
    id?: string;
    /**
     * This is always drive#permission.
     */
    kind?: string;
    /**
     * The name for this permission.
     */
    name?: string;
    /**
     * Whether the account associated with this permission is a pending owner. Only populated for user type permissions for files that are not in a shared drive.
     */
    pendingOwner?: boolean;
    /**
     * Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.
     */
    permissionDetails?: PermissionPermissionDetails[];
    /**
     * A link to the profile photo, if available.
     */
    photoLink?: string;
    /**
     * The primary role for this user. While new values may be supported in the future, the following are currently allowed:
     *
     * @remarks
     * - owner
     * - organizer
     * - fileOrganizer
     * - writer
     * - reader
     */
    role?: string;
    /**
     * A link back to this permission.
     */
    selfLink?: string;
    /**
     * Deprecated - use permissionDetails instead.
     */
    teamDrivePermissionDetails?: PermissionTeamDrivePermissionDetails[];
    /**
     * The account type. Allowed values are:
     *
     * @remarks
     * - user
     * - group
     * - domain
     * - anyone
     */
    type?: string;
    /**
     * The email address or domain name for the entity. This is used during inserts and is not populated in responses. When making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission type is anyone, in which case both id and value are ignored.
     */
    value?: string;
    /**
     * Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value.
     */
    view?: string;
    /**
     * Whether the link is required for this permission.
     */
    withLink?: boolean;
}
