import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionCompatibility } from "./dimensioncompatibility";
import { MetricCompatibility } from "./metriccompatibility";
/**
 * The compatibility response with the compatibility of each dimension & metric.
 */
export declare class CheckCompatibilityResponse extends SpeakeasyBase {
    /**
     * The compatibility of each dimension.
     */
    dimensionCompatibilities?: DimensionCompatibility[];
    /**
     * The compatibility of each metric.
     */
    metricCompatibilities?: MetricCompatibility[];
}
