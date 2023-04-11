import { SpeakeasyBase } from "../../../internal/utils";
import { MetricHeaderEntry } from "./metricheaderentry";
/**
 * The headers for the each of the metric column corresponding to the metrics requested in the pivots section of the response.
 */
export declare class PivotHeaderEntry extends SpeakeasyBase {
    /**
     * The name of the dimensions in the pivot response.
     */
    dimensionNames?: string[];
    /**
     * The values for the dimensions in the pivot.
     */
    dimensionValues?: string[];
    /**
     * Header for the metrics.
     */
    metric?: MetricHeaderEntry;
}
