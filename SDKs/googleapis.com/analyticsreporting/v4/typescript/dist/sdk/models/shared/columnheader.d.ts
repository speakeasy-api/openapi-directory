import { SpeakeasyBase } from "../../../internal/utils";
import { MetricHeader } from "./metricheader";
/**
 * Column headers.
 */
export declare class ColumnHeader extends SpeakeasyBase {
    /**
     * The dimension names in the response.
     */
    dimensions?: string[];
    /**
     * The headers for the metrics.
     */
    metricHeader?: MetricHeader;
}
