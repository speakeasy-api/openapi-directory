import { SpeakeasyBase } from "../../../internal/utils";
import { WorkItem } from "./workitem";
/**
 * Response to a request to lease WorkItems.
 */
export declare class LeaseWorkItemResponse extends SpeakeasyBase {
    /**
     * Untranslated bag-of-bytes WorkResponse for UnifiedWorker.
     */
    unifiedWorkerResponse?: Record<string, any>;
    /**
     * A list of the leased WorkItems.
     */
    workItems?: WorkItem[];
}
