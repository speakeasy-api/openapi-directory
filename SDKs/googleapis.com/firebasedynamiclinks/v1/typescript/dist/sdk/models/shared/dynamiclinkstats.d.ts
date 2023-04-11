import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicLinkEventStat } from "./dynamiclinkeventstat";
/**
 * Analytics stats of a Dynamic Link for a given timeframe.
 */
export declare class DynamicLinkStats extends SpeakeasyBase {
    /**
     * Dynamic Link event stats.
     */
    linkEventStats?: DynamicLinkEventStat[];
}
