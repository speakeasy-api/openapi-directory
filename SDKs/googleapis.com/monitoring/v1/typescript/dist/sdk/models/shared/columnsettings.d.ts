import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The persistent settings for a table's columns.
 */
export declare class ColumnSettings extends SpeakeasyBase {
    /**
     * Required. The id of the column.
     */
    column?: string;
    /**
     * Required. Whether the column should be visible on page load.
     */
    visible?: boolean;
}
