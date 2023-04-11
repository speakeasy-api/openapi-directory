import { SpeakeasyBase } from "../../../internal/utils";
import { APICounterV2Out } from "./apicounterv2out";
/**
 * Print historical API usage (NB. new output format form v2.0.15)
 */
export declare class APIUsageHistoryOut extends SpeakeasyBase {
    /**
     * Detailed usage as reported by the deduplicating API counter.
     */
    detailedUsage?: APICounterV2Out[];
}
