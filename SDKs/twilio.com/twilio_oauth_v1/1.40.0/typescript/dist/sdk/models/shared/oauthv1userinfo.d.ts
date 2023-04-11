import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class OauthV1UserInfo extends SpeakeasyBase {
    /**
     * The end-user's preferred email address.
     */
    email?: string;
    /**
     * The first name of the end-user.
     */
    firstName?: string;
    /**
     * The friendly name of the end-user.
     */
    friendlyName?: string;
    /**
     * The last name of the end-user.
     */
    lastName?: string;
    url?: string;
    /**
     * The URL of the party that will create the token and sign it with its private key.
     */
    userSid?: string;
}
