import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBillingBudgetsV1BudgetAmount } from "./googlecloudbillingbudgetsv1budgetamount";
import { GoogleCloudBillingBudgetsV1Filter } from "./googlecloudbillingbudgetsv1filter";
import { GoogleCloudBillingBudgetsV1NotificationsRule } from "./googlecloudbillingbudgetsv1notificationsrule";
import { GoogleCloudBillingBudgetsV1ThresholdRule } from "./googlecloudbillingbudgetsv1thresholdrule";
/**
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
 */
export declare class GoogleCloudBillingBudgetsV1BudgetInput extends SpeakeasyBase {
    /**
     * The budgeted amount for each usage period.
     */
    amount?: GoogleCloudBillingBudgetsV1BudgetAmount;
    /**
     * A filter for a budget, limiting the scope of the cost to calculate.
     */
    budgetFilter?: GoogleCloudBillingBudgetsV1Filter;
    /**
     * User data for display name in UI. The name must be less than or equal to 60 characters.
     */
    displayName?: string;
    /**
     * Optional. Etag to validate that the object is unchanged for a read-modify-write operation. An empty etag causes an update to overwrite other changes.
     */
    etag?: string;
    /**
     * NotificationsRule defines notifications that are sent based on budget spend and thresholds.
     */
    notificationsRule?: GoogleCloudBillingBudgetsV1NotificationsRule;
    /**
     * Optional. Rules that trigger alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget. Optional for `pubsubTopic` notifications. Required if using email notifications.
     */
    thresholdRules?: GoogleCloudBillingBudgetsV1ThresholdRule[];
}
/**
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
 */
export declare class GoogleCloudBillingBudgetsV1Budget extends SpeakeasyBase {
    /**
     * The budgeted amount for each usage period.
     */
    amount?: GoogleCloudBillingBudgetsV1BudgetAmount;
    /**
     * A filter for a budget, limiting the scope of the cost to calculate.
     */
    budgetFilter?: GoogleCloudBillingBudgetsV1Filter;
    /**
     * User data for display name in UI. The name must be less than or equal to 60 characters.
     */
    displayName?: string;
    /**
     * Optional. Etag to validate that the object is unchanged for a read-modify-write operation. An empty etag causes an update to overwrite other changes.
     */
    etag?: string;
    /**
     * Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
     */
    name?: string;
    /**
     * NotificationsRule defines notifications that are sent based on budget spend and thresholds.
     */
    notificationsRule?: GoogleCloudBillingBudgetsV1NotificationsRule;
    /**
     * Optional. Rules that trigger alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget. Optional for `pubsubTopic` notifications. Required if using email notifications.
     */
    thresholdRules?: GoogleCloudBillingBudgetsV1ThresholdRule[];
}
