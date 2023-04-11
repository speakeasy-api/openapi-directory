import { SpeakeasyBase } from "../../../internal/utils";
import { MetricHeaderEntry } from "./metricheaderentry";
import { PivotHeader } from "./pivotheader";
/**
 * The headers for the metrics.
 */
export declare class MetricHeader extends SpeakeasyBase {
    /**
     * Headers for the metrics in the response.
     */
    metricHeaderEntries?: MetricHeaderEntry[];
    /**
     * Headers for the pivots in the response.
     */
    pivotHeaders?: PivotHeader[];
}
