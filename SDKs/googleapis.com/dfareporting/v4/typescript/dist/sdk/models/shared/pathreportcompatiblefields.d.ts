import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
/**
 * Represents fields that are compatible to be selected for a report of type "PATH".
 */
export declare class PathReportCompatibleFields extends SpeakeasyBase {
    /**
     * Dimensions which are compatible to be selected in the "channelGroupings" section of the report.
     */
    channelGroupings?: Dimension[];
    /**
     * Dimensions which are compatible to be selected in the "dimensions" section of the report.
     */
    dimensions?: Dimension[];
    /**
     * The kind of resource this is, in this case dfareporting#pathReportCompatibleFields.
     */
    kind?: string;
    /**
     * Metrics which are compatible to be selected in the "metricNames" section of the report.
     */
    metrics?: Metric[];
    /**
     * Dimensions which are compatible to be selected in the "pathFilters" section of the report.
     */
    pathFilters?: Dimension[];
}
