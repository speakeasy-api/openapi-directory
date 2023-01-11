import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Response to batch undelete operation on alerts.
**/
export declare class BatchUndeleteAlertsResponse extends SpeakeasyBase {
    failedAlertStatus?: Record<string, Status>;
    successAlertIds?: string[];
}
