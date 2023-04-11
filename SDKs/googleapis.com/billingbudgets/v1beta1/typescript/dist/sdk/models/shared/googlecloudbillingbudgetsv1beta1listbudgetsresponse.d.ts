import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBillingBudgetsV1beta1Budget } from "./googlecloudbillingbudgetsv1beta1budget";
/**
 * Response for ListBudgets
 */
export declare class GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse extends SpeakeasyBase {
    /**
     * List of the budgets owned by the requested billing account.
     */
    budgets?: GoogleCloudBillingBudgetsV1beta1Budget[];
    /**
     * If not empty, indicates that there may be more budgets that match the request; this value should be passed in a new `ListBudgetsRequest`.
     */
    nextPageToken?: string;
}
