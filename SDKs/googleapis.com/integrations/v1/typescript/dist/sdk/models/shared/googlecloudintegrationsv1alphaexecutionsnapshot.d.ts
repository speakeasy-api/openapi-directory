import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata } from "./googlecloudintegrationsv1alphaexecutionsnapshotexecutionsnapshotmetadata";
import { GoogleCloudIntegrationsV1alphaTaskExecutionDetails } from "./googlecloudintegrationsv1alphataskexecutiondetails";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
/**
 * Contains the snapshot of the execution for a given checkpoint.
 */
export declare class GoogleCloudIntegrationsV1alphaExecutionSnapshot extends SpeakeasyBase {
    /**
     * Indicates "after which checkpoint task's execution" this snapshot is taken.
     */
    checkpointTaskNumber?: string;
    /**
     * Metadata of the execution snapshot.
     */
    executionSnapshotMetadata?: GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata;
    /**
     * Parameters used during the execution.
     */
    params?: Record<string, GoogleCloudIntegrationsV1alphaValueType>;
    /**
     * All of the task execution details at the given point of time.
     */
    taskExecutionDetails?: GoogleCloudIntegrationsV1alphaTaskExecutionDetails[];
}
