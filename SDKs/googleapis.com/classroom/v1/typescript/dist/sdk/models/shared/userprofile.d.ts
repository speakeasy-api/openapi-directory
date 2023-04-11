import { SpeakeasyBase } from "../../../internal/utils";
import { GlobalPermission } from "./globalpermission";
import { Name } from "./name";
/**
 * Global information for a user.
 */
export declare class UserProfile extends SpeakeasyBase {
    /**
     * Email address of the user. Must request `https://www.googleapis.com/auth/classroom.profile.emails` scope for this field to be populated in a response body. Read-only.
     */
    emailAddress?: string;
    /**
     * Identifier of the user. Read-only.
     */
    id?: string;
    /**
     * Details of the user's name.
     */
    name?: Name;
    /**
     * Global permissions of the user. Read-only.
     */
    permissions?: GlobalPermission[];
    /**
     * URL of user's profile photo. Must request `https://www.googleapis.com/auth/classroom.profile.photos` scope for this field to be populated in a response body. Read-only.
     */
    photoUrl?: string;
    /**
     * Represents whether a Google Workspace for Education user's domain administrator has explicitly verified them as being a teacher. This field is always false if the user is not a member of a Google Workspace for Education domain. Read-only
     */
    verifiedTeacher?: boolean;
}
