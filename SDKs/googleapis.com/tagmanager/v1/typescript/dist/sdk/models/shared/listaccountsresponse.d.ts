import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * List Accounts Response.
 */
export declare class ListAccountsResponse extends SpeakeasyBase {
    /**
     * List of GTM Accounts that a user has access to.
     */
    accounts?: Account[];
}
