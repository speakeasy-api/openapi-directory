import { SpeakeasyBase } from "../../../internal/utils";
import { TableBorderProperties } from "./tableborderproperties";
import { TableCellLocation } from "./tablecelllocation";
/**
 * The properties of each border cell.
 */
export declare class TableBorderCell extends SpeakeasyBase {
    /**
     * A location of a single table cell within a table.
     */
    location?: TableCellLocation;
    /**
     * The border styling properties of the TableBorderCell.
     */
    tableBorderProperties?: TableBorderProperties;
}
