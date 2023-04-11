import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Oracle database profile.
 */
export declare class OracleProfile extends SpeakeasyBase {
    /**
     * Connection string attributes
     */
    connectionAttributes?: Record<string, string>;
    /**
     * Required. Database for the Oracle connection.
     */
    databaseService?: string;
    /**
     * Required. Hostname for the Oracle connection.
     */
    hostname?: string;
    /**
     * Required. Password for the Oracle connection.
     */
    password?: string;
    /**
     * Port for the Oracle connection, default value is 1521.
     */
    port?: number;
    /**
     * Required. Username for the Oracle connection.
     */
    username?: string;
}
