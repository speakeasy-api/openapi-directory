import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Oracle data source object identifier.
 */
export declare class OracleObjectIdentifier extends SpeakeasyBase {
    /**
     * Required. The schema name.
     */
    schema?: string;
    /**
     * Required. The table name.
     */
    table?: string;
}
