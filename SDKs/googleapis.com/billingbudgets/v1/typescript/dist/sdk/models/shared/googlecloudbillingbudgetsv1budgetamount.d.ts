import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeMoney } from "./googletypemoney";
/**
 * The budgeted amount for each usage period.
 */
export declare class GoogleCloudBillingBudgetsV1BudgetAmount extends SpeakeasyBase {
    /**
     * Describes a budget amount targeted to the last Filter.calendar_period spend. At this time, the amount is automatically 100% of the last calendar period's spend; that is, there are no other options yet. LastPeriodAmount cannot be set for a budget configured with a Filter.custom_period.
     */
    lastPeriodAmount?: Record<string, any>;
    /**
     * Represents an amount of money with its currency type.
     */
    specifiedAmount?: GoogleTypeMoney;
}
