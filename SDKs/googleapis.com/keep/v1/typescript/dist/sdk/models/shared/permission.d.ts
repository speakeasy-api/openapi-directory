import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
import { User } from "./user";
/**
 * The role granted by this permission. The role determines the entity’s ability to read, write, and share notes.
 */
export declare enum PermissionRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    Owner = "OWNER",
    Writer = "WRITER"
}
/**
 * A single permission on the note. Associates a `member` with a `role`.
 */
export declare class PermissionInput extends SpeakeasyBase {
    /**
     * The email associated with the member. If set on create, the `email` field in the `User` or `Group` message must either be empty or match this field. On read, may be unset if the member does not have an associated email.
     */
    email?: string;
    /**
     * Describes a single Google Family.
     */
    family?: Record<string, any>;
    /**
     * Describes a single Group.
     */
    group?: Group;
    /**
     * The role granted by this permission. The role determines the entity’s ability to read, write, and share notes.
     */
    role?: PermissionRoleEnum;
    /**
     * Describes a single user.
     */
    user?: User;
}
/**
 * A single permission on the note. Associates a `member` with a `role`.
 */
export declare class Permission extends SpeakeasyBase {
    /**
     * Output only. Whether this member has been deleted. If the member is recovered, this value is set to false and the recovered member retains the role on the note.
     */
    deleted?: boolean;
    /**
     * The email associated with the member. If set on create, the `email` field in the `User` or `Group` message must either be empty or match this field. On read, may be unset if the member does not have an associated email.
     */
    email?: string;
    /**
     * Describes a single Google Family.
     */
    family?: Record<string, any>;
    /**
     * Describes a single Group.
     */
    group?: Group;
    /**
     * Output only. The resource name.
     */
    name?: string;
    /**
     * The role granted by this permission. The role determines the entity’s ability to read, write, and share notes.
     */
    role?: PermissionRoleEnum;
    /**
     * Describes a single user.
     */
    user?: User;
}
