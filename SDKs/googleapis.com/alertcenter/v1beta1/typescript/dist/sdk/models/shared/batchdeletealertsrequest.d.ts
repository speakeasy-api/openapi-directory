import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to perform batch delete on alerts.
 */
export declare class BatchDeleteAlertsRequest extends SpeakeasyBase {
    /**
     * Required. The list of alert IDs to delete.
     */
    alertId?: string[];
    /**
     * Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     */
    customerId?: string;
}
