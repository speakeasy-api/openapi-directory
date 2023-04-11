import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional object to filter /identity/match results
 */
export declare class IdentityMatchRequestOptions extends SpeakeasyBase {
    /**
     * An array of `account_ids` to perform fuzzy match
     */
    accountIds?: string[];
}
