import { SpeakeasyBase } from "../../../internal/utils";
import { WorkItemServiceState } from "./workitemservicestate";
/**
 * Response from a request to report the status of WorkItems.
 */
export declare class ReportWorkItemStatusResponse extends SpeakeasyBase {
    /**
     * Untranslated bag-of-bytes WorkProgressUpdateResponse for UnifiedWorker.
     */
    unifiedWorkerResponse?: Record<string, any>;
    /**
     * A set of messages indicating the service-side state for each WorkItem whose status was reported, in the same order as the WorkItemStatus messages in the ReportWorkItemStatusRequest which resulting in this response.
     */
    workItemServiceStates?: WorkItemServiceState[];
}
