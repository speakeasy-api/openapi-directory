import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * Account List Response
 */
export declare class AccountsListResponse extends SpeakeasyBase {
    /**
     * Account collection.
     */
    accounts?: Account[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
