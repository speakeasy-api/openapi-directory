import { SpeakeasyBase } from "../../../internal/utils";
import { BillingRate } from "./billingrate";
/**
 * Billing Rate List Response
 */
export declare class BillingRatesListResponse extends SpeakeasyBase {
    /**
     * Billing rates collection.
     */
    billingRates?: BillingRate[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingRatesListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
