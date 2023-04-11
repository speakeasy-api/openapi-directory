import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PostgreSQL data source object identifier.
 */
export declare class PostgresqlObjectIdentifier extends SpeakeasyBase {
    /**
     * Required. The schema name.
     */
    schema?: string;
    /**
     * Required. The table name.
     */
    table?: string;
}
