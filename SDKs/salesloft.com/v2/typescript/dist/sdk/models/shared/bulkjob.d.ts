import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class BulkJob extends SpeakeasyBase {
    /**
     * When this bulk job was created
     */
    createdAt?: Date;
    /**
     * Number of errored records at the time of request for this Bulk Job
     */
    errors?: number;
    /**
     * When this bulk job finished processing
     */
    finishedAt?: Date;
    /**
     * ID of this Bulk Job
     */
    id?: number;
    /**
     * When this bulk job was marked as ready to execute
     */
    markedReadyAt?: Date;
    /**
     * Name of this Bulk Job
     */
    name?: string;
    /**
     * Number of processed records at the time of request for this Bulk Job
     */
    processed?: number;
    /**
     * Whether the Bulk Job is ready to be executed
     */
    readyToExecute?: boolean;
    /**
     * Scopes
     */
    scopes?: any[];
    /**
     * When this bulk job started processing. null until bulk job is done
     */
    startedAt?: Date;
    /**
     * State of the Bulk Job.  Must be one of: open, executing, done.
     */
    state?: string;
    /**
     * Number of total records for this Bulk Job
     */
    total?: number;
    /**
     * Type of the Bulk Job.
     */
    type?: string;
    /**
     * When this bulk job was updated
     */
    updatedAt?: Date;
}
