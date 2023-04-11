import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes authentication configuration that uses a custom account.
 */
export declare class CustomAccount extends SpeakeasyBase {
    /**
     * Required. The login form URL of the website.
     */
    loginUrl?: string;
    /**
     * Required. Input only. The password of the custom account. The credential is stored encrypted and not returned in any response nor included in audit logs.
     */
    password?: string;
    /**
     * Required. The user name of the custom account.
     */
    username?: string;
}
