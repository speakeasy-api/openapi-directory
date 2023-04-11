import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAttemptStats } from "./googlecloudintegrationsv1alphaattemptstats";
import { GoogleCloudIntegrationsV1alphaExecutionSnapshot } from "./googlecloudintegrationsv1alphaexecutionsnapshot";
/**
 * Status of the execution.
 */
export declare enum GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Processing = "PROCESSING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED",
    RetryOnHold = "RETRY_ON_HOLD",
    Suspended = "SUSPENDED"
}
/**
 * Contains the details of the execution info: this includes the tasks execution details plus the event execution statistics.
 */
export declare class GoogleCloudIntegrationsV1alphaExecutionDetails extends SpeakeasyBase {
    /**
     * List of Start and end time of the execution attempts.
     */
    attemptStats?: GoogleCloudIntegrationsV1alphaAttemptStats[];
    /**
     * List of snapshots taken during the execution.
     */
    executionSnapshots?: GoogleCloudIntegrationsV1alphaExecutionSnapshot[];
    /**
     * Status of the execution.
     */
    state?: GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum;
}
