import { SpeakeasyBase } from "../../../internal/utils";
import { Headers } from "./headers";
import { Row } from "./row";
export declare class Table extends SpeakeasyBase {
    /**
     * A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set.
     */
    columnHeaders?: Headers;
    /**
     * Name of the table. Required for subtables, ignored for the main table.
     */
    name?: string;
    /**
     * A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set.
     */
    rowHeaders?: Headers;
    /**
     * The list of rows that constitute the table. Must have the same length as `rowHeaders`. Required.
     */
    rows?: Row[];
}
