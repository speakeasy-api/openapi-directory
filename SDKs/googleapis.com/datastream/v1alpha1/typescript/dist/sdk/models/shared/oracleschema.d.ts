import { SpeakeasyBase } from "../../../internal/utils";
import { OracleTable } from "./oracletable";
/**
 * Oracle schema.
 */
export declare class OracleSchema extends SpeakeasyBase {
    /**
     * Tables in the schema.
     */
    oracleTables?: OracleTable[];
    /**
     * Schema name.
     */
    schemaName?: string;
}
