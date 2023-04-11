import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The order type. The default orderType is `VALUE`.
 */
export declare enum OrderByOrderTypeEnum {
    OrderTypeUnspecified = "ORDER_TYPE_UNSPECIFIED",
    Value = "VALUE",
    Delta = "DELTA",
    Smart = "SMART",
    HistogramBucket = "HISTOGRAM_BUCKET",
    DimensionAsInteger = "DIMENSION_AS_INTEGER"
}
/**
 * The sorting order for the field.
 */
export declare enum OrderBySortOrderEnum {
    SortOrderUnspecified = "SORT_ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * Specifies the sorting options.
 */
export declare class OrderBy extends SpeakeasyBase {
    /**
     * The field which to sort by. The default sort order is ascending. Example: `ga:browser`. Note, that you can only specify one field for sort here. For example, `ga:browser, ga:city` is not valid.
     */
    fieldName?: string;
    /**
     * The order type. The default orderType is `VALUE`.
     */
    orderType?: OrderByOrderTypeEnum;
    /**
     * The sorting order for the field.
     */
    sortOrder?: OrderBySortOrderEnum;
}
