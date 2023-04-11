import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to perform batch undelete on alerts.
 */
export declare class BatchUndeleteAlertsRequest extends SpeakeasyBase {
    /**
     * Required. The list of alert IDs to undelete.
     */
    alertId?: string[];
    /**
     * Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     */
    customerId?: string;
}
