import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class Userinfo extends SpeakeasyBase {
    /**
     * The user's email address.
     */
    email?: string;
    /**
     * The user's last name.
     */
    familyName?: string;
    /**
     * The user's gender.
     */
    gender?: string;
    /**
     * The user's first name.
     */
    givenName?: string;
    /**
     * The hosted domain e.g. example.com if the user is Google apps user.
     */
    hd?: string;
    /**
     * The obfuscated ID of the user.
     */
    id?: string;
    /**
     * URL of the profile page.
     */
    link?: string;
    /**
     * The user's preferred locale.
     */
    locale?: string;
    /**
     * The user's full name.
     */
    name?: string;
    /**
     * URL of the user's picture image.
     */
    picture?: string;
    /**
     * Boolean flag which is true if the email address is verified. Always verified because we only return the user's primary email address.
     */
    verifiedEmail?: boolean;
}
