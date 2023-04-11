import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
/**
 * The major dimension of the values.
 */
export declare enum DataFilterValueRangeMajorDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}
/**
 * A range of values whose location is specified by a DataFilter.
 */
export declare class DataFilterValueRange extends SpeakeasyBase {
    /**
     * Filter that describes what data should be selected or returned from a request.
     */
    dataFilter?: DataFilter;
    /**
     * The major dimension of the values.
     */
    majorDimension?: DataFilterValueRangeMajorDimensionEnum;
    /**
     * The data to be written. If the provided values exceed any of the ranges matched by the data filter then the request fails. If the provided values are less than the matched ranges only the specified values are written, existing values in the matched ranges remain unaffected.
     */
    values?: any[][];
}
