import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBillingBudgetsV1beta1AllUpdatesRule } from "./googlecloudbillingbudgetsv1beta1allupdatesrule";
import { GoogleCloudBillingBudgetsV1beta1BudgetAmount } from "./googlecloudbillingbudgetsv1beta1budgetamount";
import { GoogleCloudBillingBudgetsV1beta1Filter } from "./googlecloudbillingbudgetsv1beta1filter";
import { GoogleCloudBillingBudgetsV1beta1ThresholdRule } from "./googlecloudbillingbudgetsv1beta1thresholdrule";
/**
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
 */
export declare class GoogleCloudBillingBudgetsV1beta1BudgetInput extends SpeakeasyBase {
    /**
     * AllUpdatesRule defines notifications that are sent based on budget spend and thresholds.
     */
    allUpdatesRule?: GoogleCloudBillingBudgetsV1beta1AllUpdatesRule;
    /**
     * The budgeted amount for each usage period.
     */
    amount?: GoogleCloudBillingBudgetsV1beta1BudgetAmount;
    /**
     * A filter for a budget, limiting the scope of the cost to calculate.
     */
    budgetFilter?: GoogleCloudBillingBudgetsV1beta1Filter;
    /**
     * User data for display name in UI. Validation: <= 60 chars.
     */
    displayName?: string;
    /**
     * Optional. Etag to validate that the object is unchanged for a read-modify-write operation. An empty etag will cause an update to overwrite other changes.
     */
    etag?: string;
    /**
     * Optional. Rules that trigger alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget. Optional for `pubsubTopic` notifications. Required if using email notifications.
     */
    thresholdRules?: GoogleCloudBillingBudgetsV1beta1ThresholdRule[];
}
/**
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
 */
export declare class GoogleCloudBillingBudgetsV1beta1Budget extends SpeakeasyBase {
    /**
     * AllUpdatesRule defines notifications that are sent based on budget spend and thresholds.
     */
    allUpdatesRule?: GoogleCloudBillingBudgetsV1beta1AllUpdatesRule;
    /**
     * The budgeted amount for each usage period.
     */
    amount?: GoogleCloudBillingBudgetsV1beta1BudgetAmount;
    /**
     * A filter for a budget, limiting the scope of the cost to calculate.
     */
    budgetFilter?: GoogleCloudBillingBudgetsV1beta1Filter;
    /**
     * User data for display name in UI. Validation: <= 60 chars.
     */
    displayName?: string;
    /**
     * Optional. Etag to validate that the object is unchanged for a read-modify-write operation. An empty etag will cause an update to overwrite other changes.
     */
    etag?: string;
    /**
     * Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
     */
    name?: string;
    /**
     * Optional. Rules that trigger alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget. Optional for `pubsubTopic` notifications. Required if using email notifications.
     */
    thresholdRules?: GoogleCloudBillingBudgetsV1beta1ThresholdRule[];
}
