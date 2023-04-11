import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional sort order for the dimension column.
 */
export declare enum SortedDimensionSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * Represents a sorted dimension.
 */
export declare class SortedDimension extends SpeakeasyBase {
    /**
     * The kind of resource this is, in this case dfareporting#sortedDimension.
     */
    kind?: string;
    /**
     * The name of the dimension.
     */
    name?: string;
    /**
     * An optional sort order for the dimension column.
     */
    sortOrder?: SortedDimensionSortOrderEnum;
}
