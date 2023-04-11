import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
/**
 * How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
 */
export declare enum BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER",
    FormattedString = "FORMATTED_STRING"
}
/**
 * The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then a request that selects that range and sets `majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas a request that sets `majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
 */
export declare enum BatchGetValuesByDataFilterRequestMajorDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}
/**
 * How values should be represented in the output. The default render option is FORMATTED_VALUE.
 */
export declare enum BatchGetValuesByDataFilterRequestValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE",
    UnformattedValue = "UNFORMATTED_VALUE",
    Formula = "FORMULA"
}
/**
 * The request for retrieving a range of values in a spreadsheet selected by a set of DataFilters.
 */
export declare class BatchGetValuesByDataFilterRequest extends SpeakeasyBase {
    /**
     * The data filters used to match the ranges of values to retrieve. Ranges that match any of the specified data filters are included in the response.
     */
    dataFilters?: DataFilter[];
    /**
     * How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     */
    dateTimeRenderOption?: BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum;
    /**
     * The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then a request that selects that range and sets `majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas a request that sets `majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
     */
    majorDimension?: BatchGetValuesByDataFilterRequestMajorDimensionEnum;
    /**
     * How values should be represented in the output. The default render option is FORMATTED_VALUE.
     */
    valueRenderOption?: BatchGetValuesByDataFilterRequestValueRenderOptionEnum;
}
