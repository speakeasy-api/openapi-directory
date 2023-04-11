import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2HybridInspectStatistics } from "./googleprivacydlpv2hybridinspectstatistics";
import { GooglePrivacyDlpV2InfoTypeStats } from "./googleprivacydlpv2infotypestats";
/**
 * All result fields mentioned below are updated while the job is processing.
 */
export declare class GooglePrivacyDlpV2Result extends SpeakeasyBase {
    /**
     * Statistics related to processing hybrid inspect requests.
     */
    hybridStats?: GooglePrivacyDlpV2HybridInspectStatistics;
    /**
     * Statistics of how many instances of each info type were found during inspect job.
     */
    infoTypeStats?: GooglePrivacyDlpV2InfoTypeStats[];
    /**
     * Total size in bytes that were processed.
     */
    processedBytes?: string;
    /**
     * Estimate of the number of bytes to process.
     */
    totalEstimatedBytes?: string;
}
