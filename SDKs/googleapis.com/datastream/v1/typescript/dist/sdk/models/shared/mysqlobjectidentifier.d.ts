import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Mysql data source object identifier.
 */
export declare class MysqlObjectIdentifier extends SpeakeasyBase {
    /**
     * Required. The database name.
     */
    database?: string;
    /**
     * Required. The table name.
     */
    table?: string;
}
