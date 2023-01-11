import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for DataprocMetastore.MoveTableToDatabase.
**/
export declare class MoveTableToDatabaseRequest extends SpeakeasyBase {
    dbName?: string;
    destinationDbName?: string;
    tableName?: string;
}
