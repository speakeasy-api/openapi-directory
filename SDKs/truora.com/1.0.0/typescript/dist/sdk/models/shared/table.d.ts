import { SpeakeasyBase } from "../../../internal/utils";
import { TableRow } from "./tablerow";
/**
 * Represents a table to lay out search results
 */
export declare class Table extends SpeakeasyBase {
    /**
     * Table rows
     */
    rows: TableRow[];
    /**
     * Table title
     */
    title: string;
}
