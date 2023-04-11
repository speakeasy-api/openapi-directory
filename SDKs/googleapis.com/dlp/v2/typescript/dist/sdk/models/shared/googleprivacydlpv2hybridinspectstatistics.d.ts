import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Statistics related to processing hybrid inspect requests.
 */
export declare class GooglePrivacyDlpV2HybridInspectStatistics extends SpeakeasyBase {
    /**
     * The number of hybrid inspection requests aborted because the job ran out of quota or was ended before they could be processed.
     */
    abortedCount?: string;
    /**
     * The number of hybrid requests currently being processed. Only populated when called via method `getDlpJob`. A burst of traffic may cause hybrid inspect requests to be enqueued. Processing will take place as quickly as possible, but resource limitations may impact how long a request is enqueued for.
     */
    pendingCount?: string;
    /**
     * The number of hybrid inspection requests processed within this job.
     */
    processedCount?: string;
}
