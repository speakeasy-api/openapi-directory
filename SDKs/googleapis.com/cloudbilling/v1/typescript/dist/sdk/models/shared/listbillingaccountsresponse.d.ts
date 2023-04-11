import { SpeakeasyBase } from "../../../internal/utils";
import { BillingAccount } from "./billingaccount";
/**
 * Response message for `ListBillingAccounts`.
 */
export declare class ListBillingAccountsResponse extends SpeakeasyBase {
    /**
     * A list of billing accounts.
     */
    billingAccounts?: BillingAccount[];
    /**
     * A token to retrieve the next page of results. To retrieve the next page, call `ListBillingAccounts` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve.
     */
    nextPageToken?: string;
}
