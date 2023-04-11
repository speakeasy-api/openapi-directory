import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata of the execution snapshot.
 */
export declare class GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata extends SpeakeasyBase {
    /**
     * the execution attempt number this snapshot belongs to.
     */
    executionAttempt?: number;
    /**
     * the task name associated with this snapshot.
     */
    task?: string;
    /**
     * the task attempt number this snapshot belongs to.
     */
    taskAttempt?: number;
    /**
     * The task number associated with this snapshot.
     */
    taskNumber?: string;
}
