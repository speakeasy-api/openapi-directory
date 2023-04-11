import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The state of the run.
 */
export declare enum GoogleCloudDatacatalogLineageV1RunStateEnum {
    Unknown = "UNKNOWN",
    Started = "STARTED",
    Completed = "COMPLETED",
    Failed = "FAILED",
    Aborted = "ABORTED"
}
/**
 * A lineage run represents an execution of a process that creates lineage events.
 */
export declare class GoogleCloudDatacatalogLineageV1Run extends SpeakeasyBase {
    /**
     * Optional. The attributes of the run. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the run). Up to 100 attributes are allowed.
     */
    attributes?: Record<string, any>;
    /**
     * Optional. A human-readable name you can set to display in a user interface. Must be not longer than 1024 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.`
     */
    displayName?: string;
    /**
     * Optional. The timestamp of the end of the run.
     */
    endTime?: string;
    /**
     * Immutable. The resource name of the run. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}`. Can be specified or auto-assigned. {run} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`
     */
    name?: string;
    /**
     * Required. The timestamp of the start of the run.
     */
    startTime?: string;
    /**
     * Required. The state of the run.
     */
    state?: GoogleCloudDatacatalogLineageV1RunStateEnum;
}
