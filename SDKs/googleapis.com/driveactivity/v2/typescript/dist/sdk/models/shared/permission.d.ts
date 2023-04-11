import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
import { Group } from "./group";
import { User } from "./user";
/**
 * Indicates the [Google Drive permissions role](https://developers.google.com/drive/web/manage-sharing#roles). The role determines a user's ability to read, write, and comment on items.
 */
export declare enum PermissionRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    Owner = "OWNER",
    Organizer = "ORGANIZER",
    FileOrganizer = "FILE_ORGANIZER",
    Editor = "EDITOR",
    Commenter = "COMMENTER",
    Viewer = "VIEWER",
    PublishedViewer = "PUBLISHED_VIEWER"
}
/**
 * The permission setting of an object.
 */
export declare class Permission extends SpeakeasyBase {
    /**
     * If true, the item can be discovered (e.g. in the user's "Shared with me" collection) without needing a link to the item.
     */
    allowDiscovery?: boolean;
    /**
     * Represents any user (including a logged out user).
     */
    anyone?: Record<string, any>;
    /**
     * Information about a domain.
     */
    domain?: Domain;
    /**
     * Information about a group.
     */
    group?: Group;
    /**
     * Indicates the [Google Drive permissions role](https://developers.google.com/drive/web/manage-sharing#roles). The role determines a user's ability to read, write, and comment on items.
     */
    role?: PermissionRoleEnum;
    /**
     * Information about an end user.
     */
    user?: User;
}
