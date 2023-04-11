import { SpeakeasyBase } from "../../../internal/utils";
import { OracleRdbms } from "./oraclerdbms";
/**
 * Oracle data source configuration
 */
export declare class OracleSourceConfig extends SpeakeasyBase {
    /**
     * Oracle database structure.
     */
    allowlist?: OracleRdbms;
    /**
     * Configuration to drop large object values.
     */
    dropLargeObjects?: Record<string, any>;
    /**
     * Oracle database structure.
     */
    rejectlist?: OracleRdbms;
}
