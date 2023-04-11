import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserName extends SpeakeasyBase {
    /**
     * The user's display name. Limit: 256 characters.
     */
    displayName?: string;
    /**
     * The user's last name. Required when creating a user account.
     */
    familyName?: string;
    /**
     * The user's full name formed by concatenating the first and last name values.
     */
    fullName?: string;
    /**
     * The user's first name. Required when creating a user account.
     */
    givenName?: string;
}
