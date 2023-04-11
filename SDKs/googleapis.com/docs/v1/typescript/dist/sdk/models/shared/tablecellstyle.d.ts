import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { OptionalColor } from "./optionalcolor";
import { TableCellBorder } from "./tablecellborder";
/**
 * The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Docs editor.
 */
export declare enum TableCellStyleContentAlignmentEnum {
    ContentAlignmentUnspecified = "CONTENT_ALIGNMENT_UNSPECIFIED",
    ContentAlignmentUnsupported = "CONTENT_ALIGNMENT_UNSUPPORTED",
    Top = "TOP",
    Middle = "MIDDLE",
    Bottom = "BOTTOM"
}
/**
 * The style of a TableCell. Inherited table cell styles are represented as unset fields in this message. A table cell style can inherit from the table's style.
 */
export declare class TableCellStyle extends SpeakeasyBase {
    /**
     * A color that can either be fully opaque or fully transparent.
     */
    backgroundColor?: OptionalColor;
    /**
     * A border around a table cell. Table cell borders cannot be transparent. To hide a table cell border, make its width 0.
     */
    borderBottom?: TableCellBorder;
    /**
     * A border around a table cell. Table cell borders cannot be transparent. To hide a table cell border, make its width 0.
     */
    borderLeft?: TableCellBorder;
    /**
     * A border around a table cell. Table cell borders cannot be transparent. To hide a table cell border, make its width 0.
     */
    borderRight?: TableCellBorder;
    /**
     * A border around a table cell. Table cell borders cannot be transparent. To hide a table cell border, make its width 0.
     */
    borderTop?: TableCellBorder;
    /**
     * The column span of the cell. This property is read-only.
     */
    columnSpan?: number;
    /**
     * The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Docs editor.
     */
    contentAlignment?: TableCellStyleContentAlignmentEnum;
    /**
     * A magnitude in a single direction in the specified units.
     */
    paddingBottom?: Dimension;
    /**
     * A magnitude in a single direction in the specified units.
     */
    paddingLeft?: Dimension;
    /**
     * A magnitude in a single direction in the specified units.
     */
    paddingRight?: Dimension;
    /**
     * A magnitude in a single direction in the specified units.
     */
    paddingTop?: Dimension;
    /**
     * The row span of the cell. This property is read-only.
     */
    rowSpan?: number;
}
