import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Ascending is the default sort order
 */
export declare enum SortOptionsSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class SortOptions extends SpeakeasyBase {
    /**
     * The name of the operator corresponding to the field to sort on. The corresponding property must be marked as sortable.
     */
    operatorName?: string;
    /**
     * Ascending is the default sort order
     */
    sortOrder?: SortOptionsSortOrderEnum;
}
