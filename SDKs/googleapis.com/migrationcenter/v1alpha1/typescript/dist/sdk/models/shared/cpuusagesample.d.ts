import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CPU usage sample.
 */
export declare class CpuUsageSample extends SpeakeasyBase {
    /**
     * Percentage of total CPU capacity utilized. Must be in the interval [0, 100]. On most systems can be calculated using 100 - idle percentage.
     */
    utilizedPercentage?: number;
}
