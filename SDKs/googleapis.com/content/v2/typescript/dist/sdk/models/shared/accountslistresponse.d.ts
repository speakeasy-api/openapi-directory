import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * Successful response
 */
export declare class AccountsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#accountsListResponse".
     */
    kind?: string;
    /**
     * The token for the retrieval of the next page of accounts.
     */
    nextPageToken?: string;
    resources?: Account[];
}
