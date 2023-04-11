import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A service account that can be used to authenticate as the enterprise to API calls that require such authentication.
 */
export declare class EnterpriseAccount extends SpeakeasyBase {
    /**
     * The email address of the service account.
     */
    accountEmail?: string;
}
