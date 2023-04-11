import { SpeakeasyBase } from "../../../internal/utils";
import { CrossDimensionReachReportCompatibleFields } from "./crossdimensionreachreportcompatiblefields";
import { FloodlightReportCompatibleFields } from "./floodlightreportcompatiblefields";
import { PathReportCompatibleFields } from "./pathreportcompatiblefields";
import { PathToConversionReportCompatibleFields } from "./pathtoconversionreportcompatiblefields";
import { ReachReportCompatibleFields } from "./reachreportcompatiblefields";
import { ReportCompatibleFields } from "./reportcompatiblefields";
/**
 * Represents a response to the queryCompatibleFields method.
 */
export declare class CompatibleFields extends SpeakeasyBase {
    /**
     * Represents fields that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH".
     */
    crossDimensionReachReportCompatibleFields?: CrossDimensionReachReportCompatibleFields;
    /**
     * Represents fields that are compatible to be selected for a report of type "FlOODLIGHT".
     */
    floodlightReportCompatibleFields?: FloodlightReportCompatibleFields;
    /**
     * The kind of resource this is, in this case dfareporting#compatibleFields.
     */
    kind?: string;
    /**
     * Represents fields that are compatible to be selected for a report of type "PATH".
     */
    pathAttributionReportCompatibleFields?: PathReportCompatibleFields;
    /**
     * Represents fields that are compatible to be selected for a report of type "PATH".
     */
    pathReportCompatibleFields?: PathReportCompatibleFields;
    /**
     * Represents fields that are compatible to be selected for a report of type "PATH_TO_CONVERSION".
     */
    pathToConversionReportCompatibleFields?: PathToConversionReportCompatibleFields;
    /**
     * Represents fields that are compatible to be selected for a report of type "REACH".
     */
    reachReportCompatibleFields?: ReachReportCompatibleFields;
    /**
     * Represents fields that are compatible to be selected for a report of type "STANDARD".
     */
    reportCompatibleFields?: ReportCompatibleFields;
}
