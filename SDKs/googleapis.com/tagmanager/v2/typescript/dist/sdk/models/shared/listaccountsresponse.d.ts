import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * List Accounts Response.
 */
export declare class ListAccountsResponse extends SpeakeasyBase {
    /**
     * List of GTM Accounts that a user has access to.
     */
    account?: Account[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
}
