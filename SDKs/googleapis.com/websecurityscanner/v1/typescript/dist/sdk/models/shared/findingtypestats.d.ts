import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A FindingTypeStats resource represents stats regarding a specific FindingType of Findings under a given ScanRun.
 */
export declare class FindingTypeStats extends SpeakeasyBase {
    /**
     * Output only. The count of findings belonging to this finding type.
     */
    findingCount?: number;
    /**
     * Output only. The finding type associated with the stats.
     */
    findingType?: string;
}
