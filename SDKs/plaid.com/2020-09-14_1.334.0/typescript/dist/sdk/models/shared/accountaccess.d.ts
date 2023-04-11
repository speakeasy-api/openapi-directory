import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allow or disallow product access by account. Unlisted (e.g. missing) accounts will be considered `new_accounts`.
 */
export declare class AccountAccess extends SpeakeasyBase {
    /**
     * Allow the application to access specific products on this account
     */
    accountProductAccess?: Record<string, any>;
    /**
     * Allow the application to see this account (and associated details, including balance) in the list of accounts  If unset, defaults to `true`.
     */
    authorized?: boolean;
    /**
     * The unique account identifier for this account. This value must match that returned by the data access API for this account.
     */
    uniqueId: string;
}
