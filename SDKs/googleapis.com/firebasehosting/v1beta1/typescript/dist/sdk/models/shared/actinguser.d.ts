import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains metadata about the user who performed an action, such as creating a release or finalizing a version.
 */
export declare class ActingUser extends SpeakeasyBase {
    /**
     * The email address of the user when the user performed the action.
     */
    email?: string;
    /**
     * A profile image URL for the user. May not be present if the user has changed their email address or deleted their account.
     */
    imageUrl?: string;
}
