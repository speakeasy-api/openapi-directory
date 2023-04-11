import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a Drive user.
 */
export declare class User extends SpeakeasyBase {
    /**
     * A plain text displayable name for this user.
     */
    displayName?: string;
    /**
     * The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
     */
    emailAddress?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#user".
     */
    kind?: string;
    /**
     * Whether this user is the requesting user.
     */
    me?: boolean;
    /**
     * The user's ID as visible in Permission resources.
     */
    permissionId?: string;
    /**
     * A link to the user's profile photo, if available.
     */
    photoLink?: string;
}
