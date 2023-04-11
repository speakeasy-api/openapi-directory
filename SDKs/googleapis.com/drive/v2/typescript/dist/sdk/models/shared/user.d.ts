import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The user's profile picture.
 */
export declare class UserPicture extends SpeakeasyBase {
    /**
     * A URL that points to a profile picture of this user.
     */
    url?: string;
}
/**
 * Information about a Drive user.
 */
export declare class User extends SpeakeasyBase {
    /**
     * A plain text displayable name for this user.
     */
    displayName?: string;
    /**
     * The email address of the user.
     */
    emailAddress?: string;
    /**
     * Whether this user is the same as the authenticated user for whom the request was made.
     */
    isAuthenticatedUser?: boolean;
    /**
     * This is always drive#user.
     */
    kind?: string;
    /**
     * The user's ID as visible in the permissions collection.
     */
    permissionId?: string;
    /**
     * The user's profile picture.
     */
    picture?: UserPicture;
}
