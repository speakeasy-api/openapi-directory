import { SpeakeasyBase } from "../../../internal/utils";
import { RegionCount } from "./regioncount";
/**
 * Top regions where driving-direction requests originated from.
 */
export declare class TopDirectionSources extends SpeakeasyBase {
    /**
     * The number of days data is aggregated over.
     */
    dayCount?: number;
    /**
     * Regions sorted in descending order by count.
     */
    regionCounts?: RegionCount[];
}
