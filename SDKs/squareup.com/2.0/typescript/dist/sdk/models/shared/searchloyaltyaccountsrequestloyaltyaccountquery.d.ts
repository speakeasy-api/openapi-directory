import { SpeakeasyBase } from "../../../internal/utils";
import { LoyaltyAccountMapping } from "./loyaltyaccountmapping";
/**
 * The search criteria for the loyalty accounts.
 */
export declare class SearchLoyaltyAccountsRequestLoyaltyAccountQuery extends SpeakeasyBase {
    /**
     * The set of customer IDs to use in the loyalty account search.
     *
     * @remarks
     *
     * This cannot be combined with `mappings`.
     *
     * Max: 30 customer IDs
     */
    customerIds?: string[];
    /**
     * The set of mappings to use in the loyalty account search.
     *
     * @remarks
     *
     * This cannot be combined with `customer_ids`.
     *
     * Max: 30 mappings
     */
    mappings?: LoyaltyAccountMapping[];
}
