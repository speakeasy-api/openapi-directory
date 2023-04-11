import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Add a list of accounts to a hold.
 */
export declare class AddHeldAccountsRequest extends SpeakeasyBase {
    /**
     * A comma-separated list of the account IDs of the accounts to add to the hold. Specify either **emails** or **account_ids**, but not both.
     */
    accountIds?: string[];
    /**
     * A comma-separated list of the emails of the accounts to add to the hold. Specify either **emails** or **account_ids**, but not both.
     */
    emails?: string[];
}
