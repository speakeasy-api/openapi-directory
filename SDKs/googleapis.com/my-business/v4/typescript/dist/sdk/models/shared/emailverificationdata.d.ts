import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Display data for verifications through email.
 */
export declare class EmailVerificationData extends SpeakeasyBase {
    /**
     * Domain name in the email address. e.g. "gmail.com" in foo@gmail.com
     */
    domainName?: string;
    /**
     * Whether client is allowed to provide a different user name.
     */
    isUserNameEditable?: boolean;
    /**
     * User name in the email address. e.g. "foo" in foo@gmail.com
     */
    userName?: string;
}
