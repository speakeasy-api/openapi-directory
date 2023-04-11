import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Indicates the Google Drive permissions role. The role determines a user's ability to read, write, or comment on the file.
 */
export declare enum PermissionRoleEnum {
    Commenter = "commenter",
    FileOrganizer = "fileOrganizer",
    Owner = "owner",
    PublishedReader = "publishedReader",
    Reader = "reader",
    Writer = "writer"
}
/**
 * Indicates how widely permissions are granted.
 */
export declare enum PermissionTypeEnum {
    Anyone = "anyone",
    Domain = "domain",
    Group = "group",
    User = "user"
}
/**
 * Contains information about the permissions and type of access allowed with regards to a Google Drive object. This is a subset of the fields contained in a corresponding Drive Permissions object.
 */
export declare class Permission extends SpeakeasyBase {
    /**
     * The name of the user or group the permission applies to.
     */
    name?: string;
    /**
     * The ID for this permission. Corresponds to the Drive API's permission ID returned as part of the Drive Permissions resource.
     */
    permissionId?: string;
    /**
     * Indicates the Google Drive permissions role. The role determines a user's ability to read, write, or comment on the file.
     */
    role?: PermissionRoleEnum;
    /**
     * Indicates how widely permissions are granted.
     */
    type?: PermissionTypeEnum;
    /**
     * A representation of a user.
     */
    user?: User;
    /**
     * Whether the permission requires a link to the file.
     */
    withLink?: boolean;
}
