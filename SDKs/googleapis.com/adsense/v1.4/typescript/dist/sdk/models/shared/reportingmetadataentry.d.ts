import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReportingMetadataEntry extends SpeakeasyBase {
    /**
     * For metrics this is a list of dimension IDs which the metric is compatible with, for dimensions it is a list of compatibility groups the dimension belongs to.
     */
    compatibleDimensions?: string[];
    /**
     * The names of the metrics the dimension or metric this reporting metadata entry describes is compatible with.
     */
    compatibleMetrics?: string[];
    /**
     * Unique identifier of this reporting metadata entry, corresponding to the name of the appropriate dimension or metric.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adsense#reportingMetadataEntry.
     */
    kind?: string;
    /**
     * The names of the dimensions which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted.
     */
    requiredDimensions?: string[];
    /**
     * The names of the metrics which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted.
     */
    requiredMetrics?: string[];
    /**
     * The codes of the projects supported by the dimension or metric this reporting metadata entry describes.
     */
    supportedProducts?: string[];
}
