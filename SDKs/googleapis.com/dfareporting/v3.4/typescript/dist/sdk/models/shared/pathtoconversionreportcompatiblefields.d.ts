import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
/**
 * Represents fields that are compatible to be selected for a report of type "PATH_TO_CONVERSION".
 */
export declare class PathToConversionReportCompatibleFields extends SpeakeasyBase {
    /**
     * Conversion dimensions which are compatible to be selected in the "conversionDimensions" section of the report.
     */
    conversionDimensions?: Dimension[];
    /**
     * Custom floodlight variables which are compatible to be selected in the "customFloodlightVariables" section of the report.
     */
    customFloodlightVariables?: Dimension[];
    /**
     * The kind of resource this is, in this case dfareporting#pathToConversionReportCompatibleFields.
     */
    kind?: string;
    /**
     * Metrics which are compatible to be selected in the "metricNames" section of the report.
     */
    metrics?: Metric[];
    /**
     * Per-interaction dimensions which are compatible to be selected in the "perInteractionDimensions" section of the report.
     */
    perInteractionDimensions?: Dimension[];
}
