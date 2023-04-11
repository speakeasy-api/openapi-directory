import { SpeakeasyBase } from "../../../internal/utils";
export declare class SplitCommissionDetails extends SpeakeasyBase {
    /**
     * Open field to describe additional special information about the commission arrangement
     */
    commissionArrangement?: string;
    /**
     * Line of coverage for which this split commission applies if any
     */
    lineOfCoverage?: string;
    /**
     * Percentage of commission received
     */
    percentageOfCommission: string;
}
