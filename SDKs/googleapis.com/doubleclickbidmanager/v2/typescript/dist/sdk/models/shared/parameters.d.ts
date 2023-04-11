import { SpeakeasyBase } from "../../../internal/utils";
import { FilterPair } from "./filterpair";
import { Options } from "./options";
/**
 * The type of the report. The type of the report will dictate what dimesions, filters, and metrics can be used.
 */
export declare enum ParametersTypeEnum {
    ReportTypeUnspecified = "REPORT_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    InventoryAvailability = "INVENTORY_AVAILABILITY",
    AudienceComposition = "AUDIENCE_COMPOSITION",
    Floodlight = "FLOODLIGHT",
    Youtube = "YOUTUBE",
    Grp = "GRP",
    YoutubeProgrammaticGuaranteed = "YOUTUBE_PROGRAMMATIC_GUARANTEED",
    Reach = "REACH",
    UniqueReachAudience = "UNIQUE_REACH_AUDIENCE",
    FullPath = "FULL_PATH",
    PathAttribution = "PATH_ATTRIBUTION"
}
/**
 * Parameters of a query or report.
 */
export declare class ParametersT extends SpeakeasyBase {
    /**
     * Filters used to match traffic data in your report.
     */
    filters?: FilterPair[];
    /**
     * Data is grouped by the filters listed in this field.
     */
    groupBys?: string[];
    /**
     * Metrics to include as columns in your report.
     */
    metrics?: string[];
    /**
     * Additional query options.
     */
    options?: Options;
    /**
     * The type of the report. The type of the report will dictate what dimesions, filters, and metrics can be used.
     */
    type?: ParametersTypeEnum;
}
