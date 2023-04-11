import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Encapsulates numeric value that can be either absolute or relative.
 */
export declare class FixedOrPercent extends SpeakeasyBase {
    /**
     * [Output Only] Absolute value of VM instances calculated based on the specific mode. - If the value is fixed, then the calculated value is equal to the fixed value. - If the value is a percent, then the calculated value is percent/100 * targetSize. For example, the calculated value of a 80% of a managed instance group with 150 instances would be (80/100 * 150) = 120 VM instances. If there is a remainder, the number is rounded.
     */
    calculated?: number;
    /**
     * Specifies a fixed number of VM instances. This must be a positive integer.
     */
    fixed?: number;
    /**
     * Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.
     */
    percent?: number;
}
