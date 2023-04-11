import { SpeakeasyBase } from "../../../internal/utils";
import { Straggler } from "./straggler";
/**
 * Summarized straggler identification details.
 */
export declare class StragglerSummary extends SpeakeasyBase {
    /**
     * The most recent stragglers.
     */
    recentStragglers?: Straggler[];
    /**
     * Aggregated counts of straggler causes, keyed by the string representation of the StragglerCause enum.
     */
    stragglerCauseCount?: Record<string, string>;
    /**
     * The total count of stragglers.
     */
    totalStragglerCount?: string;
}
