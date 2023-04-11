import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Remove a list of accounts from a hold.
 */
export declare class RemoveHeldAccountsRequest extends SpeakeasyBase {
    /**
     * The account IDs of the accounts to remove from the hold.
     */
    accountIds?: string[];
}
