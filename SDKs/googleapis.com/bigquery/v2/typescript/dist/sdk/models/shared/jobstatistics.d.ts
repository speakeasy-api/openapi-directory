import { SpeakeasyBase } from "../../../internal/utils";
import { DataMaskingStatistics } from "./datamaskingstatistics";
import { JobStatistics2 } from "./jobstatistics2";
import { JobStatistics3 } from "./jobstatistics3";
import { JobStatistics4 } from "./jobstatistics4";
import { JobStatistics5 } from "./jobstatistics5";
import { RowLevelSecurityStatistics } from "./rowlevelsecuritystatistics";
import { ScriptStatistics } from "./scriptstatistics";
import { SessionInfo } from "./sessioninfo";
import { TransactionInfo } from "./transactioninfo";
export declare class JobStatisticsReservationUsage extends SpeakeasyBase {
    /**
     * [Output-only] Reservation name or "unreserved" for on-demand resources usage.
     */
    name?: string;
    /**
     * [Output-only] Slot-milliseconds the job spent in the given reservation.
     */
    slotMs?: string;
}
export declare class JobStatistics extends SpeakeasyBase {
    /**
     * [TrustedTester] [Output-only] Job progress (0.0 -> 1.0) for LOAD and EXTRACT jobs.
     */
    completionRatio?: number;
    copy?: JobStatistics5;
    /**
     * [Output-only] Creation time of this job, in milliseconds since the epoch. This field will be present on all jobs.
     */
    creationTime?: string;
    dataMaskingStatistics?: DataMaskingStatistics;
    /**
     * [Output-only] End time of this job, in milliseconds since the epoch. This field will be present whenever a job is in the DONE state.
     */
    endTime?: string;
    extract?: JobStatistics4;
    load?: JobStatistics3;
    /**
     * [Output-only] Number of child jobs executed.
     */
    numChildJobs?: string;
    /**
     * [Output-only] If this is a child job, the id of the parent.
     */
    parentJobId?: string;
    query?: JobStatistics2;
    /**
     * [Output-only] Quotas which delayed this job's start time.
     */
    quotaDeferments?: string[];
    /**
     * [Output-only] Job resource usage breakdown by reservation.
     */
    reservationUsage?: JobStatisticsReservationUsage[];
    /**
     * [Output-only] Name of the primary reservation assigned to this job. Note that this could be different than reservations reported in the reservation usage field if parent reservations were used to execute this job.
     */
    reservationId?: string;
    rowLevelSecurityStatistics?: RowLevelSecurityStatistics;
    scriptStatistics?: ScriptStatistics;
    sessionInfo?: SessionInfo;
    /**
     * [Output-only] Start time of this job, in milliseconds since the epoch. This field will be present when the job transitions from the PENDING state to either RUNNING or DONE.
     */
    startTime?: string;
    /**
     * [Output-only] [Deprecated] Use the bytes processed in the query statistics instead.
     */
    totalBytesProcessed?: string;
    /**
     * [Output-only] Slot-milliseconds for the job.
     */
    totalSlotMs?: string;
    transactionInfo?: TransactionInfo;
}
