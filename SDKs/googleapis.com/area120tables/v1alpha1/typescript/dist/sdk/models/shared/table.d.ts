import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnDescription } from "./columndescription";
import { SavedView } from "./savedview";
/**
 * A single table. NextId: 8
 */
export declare class Table extends SpeakeasyBase {
    /**
     * List of columns in this table. Order of columns matches the display order.
     */
    columns?: ColumnDescription[];
    /**
     * Time when the table was created.
     */
    createTime?: string;
    /**
     * The human readable title of the table.
     */
    displayName?: string;
    /**
     * The resource name of the table. Table names have the form `tables/{table}`.
     */
    name?: string;
    /**
     * Saved views for this table.
     */
    savedViews?: SavedView[];
    /**
     * The time zone of the table. IANA Time Zone Database time zone, e.g. "America/New_York".
     */
    timeZone?: string;
    /**
     * Time when the table was last updated excluding updates to individual rows
     */
    updateTime?: string;
}
