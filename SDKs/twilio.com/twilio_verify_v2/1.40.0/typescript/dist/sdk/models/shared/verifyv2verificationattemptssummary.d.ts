import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class VerifyV2VerificationAttemptsSummary extends SpeakeasyBase {
    /**
     * Percentage of the confirmed messages over the total, defined by (total_converted/total_attempts)*100.
     */
    conversionRatePercentage?: number;
    /**
     * Total of attempts made according to the provided filters
     */
    totalAttempts?: number;
    /**
     * Total of  attempts made that were confirmed by the end user, according to the provided filters.
     */
    totalConverted?: number;
    /**
     * Total of attempts made that were not confirmed by the end user, according to the provided filters.
     */
    totalUnconverted?: number;
    url?: string;
}
