import { SpeakeasyBase } from "../../../internal/utils";
import { OracleSchema } from "./oracleschema";
/**
 * Oracle database structure.
 */
export declare class OracleRdbms extends SpeakeasyBase {
    /**
     * Oracle schemas/databases in the database server.
     */
    oracleSchemas?: OracleSchema[];
}
