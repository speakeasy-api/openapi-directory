import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * Response message for Accounts.ListAccounts.
 */
export declare class ListAccountsResponse extends SpeakeasyBase {
    /**
     * A collection of accounts to which the user has access. The personal account of the user doing the query will always be the first item of the result, unless it is filtered out.
     */
    accounts?: Account[];
    /**
     * If the number of accounts exceeds the requested page size, this field is populated with a token to fetch the next page of accounts on a subsequent call to `accounts.list`. If there are no more accounts, this field is not present in the response.
     */
    nextPageToken?: string;
}
