import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
/**
 * If specified, indicates that pivot values should be displayed as the result of a calculation with another pivot value. For example, if calculated_display_type is specified as PERCENT_OF_GRAND_TOTAL, all the pivot values are displayed as the percentage of the grand total. In the Sheets editor, this is referred to as "Show As" in the value section of a pivot table.
 */
export declare enum PivotValueCalculatedDisplayTypeEnum {
    PivotValueCalculatedDisplayTypeUnspecified = "PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED",
    PercentOfRowTotal = "PERCENT_OF_ROW_TOTAL",
    PercentOfColumnTotal = "PERCENT_OF_COLUMN_TOTAL",
    PercentOfGrandTotal = "PERCENT_OF_GRAND_TOTAL"
}
/**
 * A function to summarize the value. If formula is set, the only supported values are SUM and CUSTOM. If sourceColumnOffset is set, then `CUSTOM` is not supported.
 */
export declare enum PivotValueSummarizeFunctionEnum {
    PivotStandardValueFunctionUnspecified = "PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED",
    Sum = "SUM",
    Counta = "COUNTA",
    Count = "COUNT",
    Countunique = "COUNTUNIQUE",
    Average = "AVERAGE",
    Max = "MAX",
    Min = "MIN",
    Median = "MEDIAN",
    Product = "PRODUCT",
    Stdev = "STDEV",
    Stdevp = "STDEVP",
    Var = "VAR",
    Varp = "VARP",
    Custom = "CUSTOM"
}
/**
 * The definition of how a value in a pivot table should be calculated.
 */
export declare class PivotValue extends SpeakeasyBase {
    /**
     * If specified, indicates that pivot values should be displayed as the result of a calculation with another pivot value. For example, if calculated_display_type is specified as PERCENT_OF_GRAND_TOTAL, all the pivot values are displayed as the percentage of the grand total. In the Sheets editor, this is referred to as "Show As" in the value section of a pivot table.
     */
    calculatedDisplayType?: PivotValueCalculatedDisplayTypeEnum;
    /**
     * An unique identifier that references a data source column.
     */
    dataSourceColumnReference?: DataSourceColumnReference;
    /**
     * A custom formula to calculate the value. The formula must start with an `=` character.
     */
    formula?: string;
    /**
     * A name to use for the value.
     */
    name?: string;
    /**
     * The column offset of the source range that this value reads from. For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means this value refers to column `C`, whereas the offset `1` would refer to column `D`.
     */
    sourceColumnOffset?: number;
    /**
     * A function to summarize the value. If formula is set, the only supported values are SUM and CUSTOM. If sourceColumnOffset is set, then `CUSTOM` is not supported.
     */
    summarizeFunction?: PivotValueSummarizeFunctionEnum;
}
