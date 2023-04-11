import { SpeakeasyBase } from "../../../internal/utils";
export declare class Period extends SpeakeasyBase {
    /**
     * The sum of all actuals (transactions) in the period.
     */
    actualAmount?: number;
    /**
     * The currency of the period.
     */
    currencyCode?: string;
    /**
     * Whether this period is current, such that the current date (in the user's time zone) falls within the date range.
     */
    current?: boolean;
    /**
     * The end date of the period.
     */
    endDate?: string;
    /**
     * The sum of all forecast sources (budget events) in the period, for comparison against the actual amount.
     */
    forecastAmount?: number;
    /**
     * Whether the budget has been exceeded in the period.
     */
    overBudget?: boolean;
    /**
     * How much the budget has been exceeded by in the period.
     */
    overBy?: number;
    /**
     * The percentage of the budget that has been used in the period.
     */
    percentageUsed?: number;
    /**
     * This attribute tracks the amount that has been refunded or deducted to the actual amount. When a category is set to "always expense", any credit transactions are treated as refunds and when set to "always income", any debit transactions are treated as deductions.
     */
    refundAmount?: number;
    /**
     * The start date of the period.
     */
    startDate?: string;
    /**
     * Whether the budget has not been exceeded in the period.
     */
    underBudget?: boolean;
    /**
     * How much there is left in the budget for the period.
     */
    underBy?: number;
}
