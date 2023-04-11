import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request for RestoreTable.
 */
export declare class RestoreTableRequest extends SpeakeasyBase {
    /**
     * Name of the backup from which to restore. Values are of the form `projects//instances//clusters//backups/`.
     */
    backup?: string;
    /**
     * Required. The id of the table to create and restore to. This table must not already exist. The `table_id` appended to `parent` forms the full table name of the form `projects//instances//tables/`.
     */
    tableId?: string;
}
