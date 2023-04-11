import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBillingBudgetsV1beta1BudgetInput } from "./googlecloudbillingbudgetsv1beta1budget";
/**
 * Request for CreateBudget
 */
export declare class GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput extends SpeakeasyBase {
    /**
     * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
     */
    budget?: GoogleCloudBillingBudgetsV1beta1BudgetInput;
}
