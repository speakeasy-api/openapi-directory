import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to lease WorkItems.
 */
export declare class LeaseWorkItemRequest extends SpeakeasyBase {
    /**
     * The current timestamp at the worker.
     */
    currentWorkerTime?: string;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.
     */
    location?: string;
    /**
     * The initial lease period.
     */
    requestedLeaseDuration?: string;
    /**
     * Untranslated bag-of-bytes WorkRequest from UnifiedWorker.
     */
    unifiedWorkerRequest?: Record<string, any>;
    /**
     * Filter for WorkItem type.
     */
    workItemTypes?: string[];
    /**
     * Worker capabilities. WorkItems might be limited to workers with specific capabilities.
     */
    workerCapabilities?: string[];
    /**
     * Identifies the worker leasing work -- typically the ID of the virtual machine running the worker.
     */
    workerId?: string;
}
