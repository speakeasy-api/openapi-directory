import { SpeakeasyBase } from "../../../internal/utils";
import { WorkItemStatus } from "./workitemstatus";
/**
 * Request to report the status of WorkItems.
 */
export declare class ReportWorkItemStatusRequest extends SpeakeasyBase {
    /**
     * The current timestamp at the worker.
     */
    currentWorkerTime?: string;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.
     */
    location?: string;
    /**
     * Untranslated bag-of-bytes WorkProgressUpdateRequest from UnifiedWorker.
     */
    unifiedWorkerRequest?: Record<string, any>;
    /**
     * The order is unimportant, except that the order of the WorkItemServiceState messages in the ReportWorkItemStatusResponse corresponds to the order of WorkItemStatus messages here.
     */
    workItemStatuses?: WorkItemStatus[];
    /**
     * The ID of the worker reporting the WorkItem status. If this does not match the ID of the worker which the Dataflow service believes currently has the lease on the WorkItem, the report will be dropped (with an error response).
     */
    workerId?: string;
}
