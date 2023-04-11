import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Creative optimization activity.
 */
export declare class OptimizationActivity extends SpeakeasyBase {
    /**
     * Floodlight activity ID of this optimization activity. This is a required field.
     */
    floodlightActivityId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    floodlightActivityIdDimensionValue?: DimensionValue;
    /**
     * Weight associated with this optimization. The weight assigned will be understood in proportion to the weights assigned to the other optimization activities. Value must be greater than or equal to 1.
     */
    weight?: number;
}
