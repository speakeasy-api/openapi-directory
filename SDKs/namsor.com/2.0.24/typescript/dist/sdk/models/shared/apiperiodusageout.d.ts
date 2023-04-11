import { SpeakeasyBase } from "../../../internal/utils";
import { APIBillingPeriodUsageOut } from "./apibillingperiodusageout";
import { APIPlanSubscriptionOut } from "./apiplansubscriptionout";
/**
 * Print current API usage.
 */
export declare class APIPeriodUsageOut extends SpeakeasyBase {
    /**
     * The current billing period.
     */
    billingPeriod?: APIBillingPeriodUsageOut;
    /**
     * Currency of the overage amount.
     */
    overageCurrency?: string;
    /**
     * Overage amount including any tax.
     */
    overageExclTax?: number;
    /**
     * Overage amount including tax (if applicable).
     */
    overageInclTax?: number;
    /**
     * Quantity above monthly quota of the current subscritpion, in units.
     */
    overageQuantity?: number;
    /**
     * The API Plan governing the subscription.
     */
    subscription?: APIPlanSubscriptionOut;
}
