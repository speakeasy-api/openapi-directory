import { SpeakeasyBase } from "../../../internal/utils";
import { TableBorderCell } from "./tablebordercell";
/**
 * Contents of each border row in a table.
 */
export declare class TableBorderRow extends SpeakeasyBase {
    /**
     * Properties of each border cell. When a border's adjacent table cells are merged, it is not included in the response.
     */
    tableBorderCells?: TableBorderCell[];
}
