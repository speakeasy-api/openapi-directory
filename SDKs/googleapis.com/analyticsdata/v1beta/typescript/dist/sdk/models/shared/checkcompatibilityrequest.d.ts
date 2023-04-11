import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { FilterExpression } from "./filterexpression";
import { Metric } from "./metric";
/**
 * Filters the dimensions and metrics in the response to just this compatibility. Commonly used as `”compatibilityFilter”: “COMPATIBLE”` to only return compatible dimensions & metrics.
 */
export declare enum CheckCompatibilityRequestCompatibilityFilterEnum {
    CompatibilityUnspecified = "COMPATIBILITY_UNSPECIFIED",
    Compatible = "COMPATIBLE",
    Incompatible = "INCOMPATIBLE"
}
/**
 * The request for compatibility information for a report's dimensions and metrics. Check compatibility provides a preview of the compatibility of a report; fields shared with the `runReport` request should be the same values as in your `runReport` request.
 */
export declare class CheckCompatibilityRequest extends SpeakeasyBase {
    /**
     * Filters the dimensions and metrics in the response to just this compatibility. Commonly used as `”compatibilityFilter”: “COMPATIBLE”` to only return compatible dimensions & metrics.
     */
    compatibilityFilter?: CheckCompatibilityRequestCompatibilityFilterEnum;
    /**
     * To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics.
     */
    dimensionFilter?: FilterExpression;
    /**
     * The dimensions in this report. `dimensions` should be the same value as in your `runReport` request.
     */
    dimensions?: Dimension[];
    /**
     * To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics.
     */
    metricFilter?: FilterExpression;
    /**
     * The metrics in this report. `metrics` should be the same value as in your `runReport` request.
     */
    metrics?: Metric[];
}
