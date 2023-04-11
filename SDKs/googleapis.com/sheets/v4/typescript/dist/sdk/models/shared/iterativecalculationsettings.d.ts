import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings to control how circular dependencies are resolved with iterative calculation.
 */
export declare class IterativeCalculationSettings extends SpeakeasyBase {
    /**
     * When iterative calculation is enabled and successive results differ by less than this threshold value, the calculation rounds stop.
     */
    convergenceThreshold?: number;
    /**
     * When iterative calculation is enabled, the maximum number of calculation rounds to perform.
     */
    maxIterations?: number;
}
