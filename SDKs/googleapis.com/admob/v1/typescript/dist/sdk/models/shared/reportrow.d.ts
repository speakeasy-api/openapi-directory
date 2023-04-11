import { SpeakeasyBase } from "../../../internal/utils";
import { ReportRowDimensionValue } from "./reportrowdimensionvalue";
import { ReportRowMetricValue } from "./reportrowmetricvalue";
/**
 * A row of the returning report.
 */
export declare class ReportRow extends SpeakeasyBase {
    /**
     * Map of dimension values in a row, with keys as enum name of the dimensions.
     */
    dimensionValues?: Record<string, ReportRowDimensionValue>;
    /**
     * Map of metric values in a row, with keys as enum name of the metrics. If a metric being requested has no value returned, the map will not include it.
     */
    metricValues?: Record<string, ReportRowMetricValue>;
}
