import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
import { TableCellProperties } from "./tablecellproperties";
import { TextContent } from "./textcontent";
/**
 * Properties and contents of each table cell.
 */
export declare class TableCell extends SpeakeasyBase {
    /**
     * Column span of the cell.
     */
    columnSpan?: number;
    /**
     * A location of a single table cell within a table.
     */
    location?: TableCellLocation;
    /**
     * Row span of the cell.
     */
    rowSpan?: number;
    /**
     * The properties of the TableCell.
     */
    tableCellProperties?: TableCellProperties;
    /**
     * The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a page.
     */
    text?: TextContent;
}
