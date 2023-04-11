import { SpeakeasyBase } from "../../../internal/utils";
import { BillingProfile } from "./billingprofile";
/**
 * Billing profile List Response
 */
export declare class BillingProfilesListResponse extends SpeakeasyBase {
    /**
     * Billing profiles collection.
     */
    billingProfiles?: BillingProfile[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingProfilesListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
