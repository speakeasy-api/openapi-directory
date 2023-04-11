import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PostgreSQL database profile.
 */
export declare class PostgresqlProfile extends SpeakeasyBase {
    /**
     * Required. Database for the PostgreSQL connection.
     */
    database?: string;
    /**
     * Required. Hostname for the PostgreSQL connection.
     */
    hostname?: string;
    /**
     * Required. Password for the PostgreSQL connection.
     */
    password?: string;
    /**
     * Port for the PostgreSQL connection, default value is 5432.
     */
    port?: number;
    /**
     * Required. Username for the PostgreSQL connection.
     */
    username?: string;
}
