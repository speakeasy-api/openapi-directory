import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellBackgroundFill } from "./tablecellbackgroundfill";
/**
 * The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Slides editor.
 */
export declare enum TableCellPropertiesContentAlignmentEnum {
    ContentAlignmentUnspecified = "CONTENT_ALIGNMENT_UNSPECIFIED",
    ContentAlignmentUnsupported = "CONTENT_ALIGNMENT_UNSUPPORTED",
    Top = "TOP",
    Middle = "MIDDLE",
    Bottom = "BOTTOM"
}
/**
 * The properties of the TableCell.
 */
export declare class TableCellProperties extends SpeakeasyBase {
    /**
     * The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Slides editor.
     */
    contentAlignment?: TableCellPropertiesContentAlignmentEnum;
    /**
     * The table cell background fill.
     */
    tableCellBackgroundFill?: TableCellBackgroundFill;
}
