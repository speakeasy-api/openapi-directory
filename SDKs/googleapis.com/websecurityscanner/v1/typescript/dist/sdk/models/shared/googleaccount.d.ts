import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes authentication configuration that uses a Google account.
 */
export declare class GoogleAccount extends SpeakeasyBase {
    /**
     * Required. Input only. The password of the Google account. The credential is stored encrypted and not returned in any response nor included in audit logs.
     */
    password?: string;
    /**
     * Required. The user name of the Google account.
     */
    username?: string;
}
