import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Response to batch undelete operation on alerts.
 */
export declare class BatchUndeleteAlertsResponse extends SpeakeasyBase {
    /**
     * The status details for each failed `alert_id`.
     */
    failedAlertStatus?: Record<string, Status>;
    /**
     * The successful list of alert IDs.
     */
    successAlertIds?: string[];
}
