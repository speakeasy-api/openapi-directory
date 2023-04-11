import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for DataprocMetastore.MoveTableToDatabase.
 */
export declare class MoveTableToDatabaseRequest extends SpeakeasyBase {
    /**
     * Required. The name of the database where the table resides.
     */
    dbName?: string;
    /**
     * Required. The name of the database where the table should be moved.
     */
    destinationDbName?: string;
    /**
     * Required. The name of the table to be moved.
     */
    tableName?: string;
}
