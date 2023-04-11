import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The delivery method that determines the rate at which the campaign budget is spent. Defaults to STANDARD if unspecified in a create operation.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCampaignBudgetDeliveryMethodEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Standard = "STANDARD",
    Accelerated = "ACCELERATED"
}
/**
 * Immutable. Period over which to spend the budget. Defaults to DAILY if not specified.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCampaignBudgetPeriodEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Daily = "DAILY",
    FixedDaily = "FIXED_DAILY",
    CustomPeriod = "CUSTOM_PERIOD"
}
/**
 * A campaign budget.
 */
export declare class GoogleAdsSearchads360V0ResourcesCampaignBudget extends SpeakeasyBase {
    /**
     * The amount of the budget, in the local currency for the account. Amount is specified in micros, where one million is equivalent to one currency unit. Monthly spend is capped at 30.4 times this amount.
     */
    amountMicros?: string;
    /**
     * The delivery method that determines the rate at which the campaign budget is spent. Defaults to STANDARD if unspecified in a create operation.
     */
    deliveryMethod?: GoogleAdsSearchads360V0ResourcesCampaignBudgetDeliveryMethodEnum;
    /**
     * Immutable. Period over which to spend the budget. Defaults to DAILY if not specified.
     */
    period?: GoogleAdsSearchads360V0ResourcesCampaignBudgetPeriodEnum;
    /**
     * Immutable. The resource name of the campaign budget. Campaign budget resource names have the form: `customers/{customer_id}/campaignBudgets/{campaign_budget_id}`
     */
    resourceName?: string;
}
