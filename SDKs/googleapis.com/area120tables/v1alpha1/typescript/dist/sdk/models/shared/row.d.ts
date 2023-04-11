import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single row in a table.
 */
export declare class Row extends SpeakeasyBase {
    /**
     * Time when the row was created.
     */
    createTime?: string;
    /**
     * The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row.
     */
    name?: string;
    /**
     * Time when the row was last updated.
     */
    updateTime?: string;
    /**
     * The values of the row. This is a map of column key to value. Key is user entered name(default) or the internal column id based on the view in the request.
     */
    values?: Record<string, any>;
}
