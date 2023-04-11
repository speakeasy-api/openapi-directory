import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedUserRole, AssignedUserRoleInput } from "./assigneduserrole";
/**
 * A single user in Display & Video 360.
 */
export declare class UserInput extends SpeakeasyBase {
    /**
     * The assigned user roles. Required in CreateUser. Output only in UpdateUser. Can only be updated through BulkEditAssignedUserRoles.
     */
    assignedUserRoles?: AssignedUserRoleInput[];
    /**
     * Required. The display name of the user. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Required. Immutable. The email address used to identify the user.
     */
    email?: string;
}
/**
 * A single user in Display & Video 360.
 */
export declare class User extends SpeakeasyBase {
    /**
     * The assigned user roles. Required in CreateUser. Output only in UpdateUser. Can only be updated through BulkEditAssignedUserRoles.
     */
    assignedUserRoles?: AssignedUserRole[];
    /**
     * Required. The display name of the user. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Required. Immutable. The email address used to identify the user.
     */
    email?: string;
    /**
     * Output only. The resource name of the user.
     */
    name?: string;
    /**
     * Output only. The unique ID of the user. Assigned by the system.
     */
    userId?: string;
}
