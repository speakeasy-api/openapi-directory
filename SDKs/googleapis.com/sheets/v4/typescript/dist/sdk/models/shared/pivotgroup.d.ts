import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { PivotGroupLimit } from "./pivotgrouplimit";
import { PivotGroupRule } from "./pivotgrouprule";
import { PivotGroupSortValueBucket } from "./pivotgroupsortvaluebucket";
import { PivotGroupValueMetadata } from "./pivotgroupvaluemetadata";
/**
 * The order the values in this group should be sorted.
 */
export declare enum PivotGroupSortOrderEnum {
    SortOrderUnspecified = "SORT_ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * A single grouping (either row or column) in a pivot table.
 */
export declare class PivotGroup extends SpeakeasyBase {
    /**
     * An unique identifier that references a data source column.
     */
    dataSourceColumnReference?: DataSourceColumnReference;
    /**
     * The count limit on rows or columns in the pivot group.
     */
    groupLimit?: PivotGroupLimit;
    /**
     * An optional setting on a PivotGroup that defines buckets for the values in the source data column rather than breaking out each individual value. Only one PivotGroup with a group rule may be added for each column in the source data, though on any given column you may add both a PivotGroup that has a rule and a PivotGroup that does not.
     */
    groupRule?: PivotGroupRule;
    /**
     * The labels to use for the row/column groups which can be customized. For example, in the following pivot table, the row label is `Region` (which could be renamed to `State`) and the column label is `Product` (which could be renamed `Item`). Pivot tables created before December 2017 do not have header labels. If you'd like to add header labels to an existing pivot table, please delete the existing pivot table and then create a new pivot table with same parameters. +--------------+---------+-------+ | SUM of Units | Product | | | Region | Pen | Paper | +--------------+---------+-------+ | New York | 345 | 98 | | Oregon | 234 | 123 | | Tennessee | 531 | 415 | +--------------+---------+-------+ | Grand Total | 1110 | 636 | +--------------+---------+-------+
     */
    label?: string;
    /**
     * True if the headings in this pivot group should be repeated. This is only valid for row groupings and is ignored by columns. By default, we minimize repetition of headings by not showing higher level headings where they are the same. For example, even though the third row below corresponds to "Q1 Mar", "Q1" is not shown because it is redundant with previous rows. Setting repeat_headings to true would cause "Q1" to be repeated for "Feb" and "Mar". +--------------+ | Q1 | Jan | | | Feb | | | Mar | +--------+-----+ | Q1 Total | +--------------+
     */
    repeatHeadings?: boolean;
    /**
     * True if the pivot table should include the totals for this grouping.
     */
    showTotals?: boolean;
    /**
     * The order the values in this group should be sorted.
     */
    sortOrder?: PivotGroupSortOrderEnum;
    /**
     * The column offset of the source range that this grouping is based on. For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means this group refers to column `C`, whereas the offset `1` would refer to column `D`.
     */
    sourceColumnOffset?: number;
    /**
     * Information about which values in a pivot group should be used for sorting.
     */
    valueBucket?: PivotGroupSortValueBucket;
    /**
     * Metadata about values in the grouping.
     */
    valueMetadata?: PivotGroupValueMetadata[];
}
