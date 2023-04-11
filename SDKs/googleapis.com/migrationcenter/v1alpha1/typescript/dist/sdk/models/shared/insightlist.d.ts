import { SpeakeasyBase } from "../../../internal/utils";
import { Insight } from "./insight";
/**
 * Message containing insights list.
 */
export declare class InsightList extends SpeakeasyBase {
    /**
     * Output only. Insights of the list.
     */
    insights?: Insight[];
    /**
     * Output only. Update timestamp.
     */
    updateTime?: string;
}
