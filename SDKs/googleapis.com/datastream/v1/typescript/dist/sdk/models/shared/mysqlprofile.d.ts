import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlSslConfig, MysqlSslConfigInput } from "./mysqlsslconfig";
/**
 * MySQL database profile.
 */
export declare class MysqlProfile extends SpeakeasyBase {
    /**
     * Required. Hostname for the MySQL connection.
     */
    hostname?: string;
    /**
     * Required. Input only. Password for the MySQL connection.
     */
    password?: string;
    /**
     * Port for the MySQL connection, default value is 3306.
     */
    port?: number;
    /**
     * MySQL SSL configuration information.
     */
    sslConfig?: MysqlSslConfig;
    /**
     * Required. Username for the MySQL connection.
     */
    username?: string;
}
/**
 * MySQL database profile.
 */
export declare class MysqlProfileInput extends SpeakeasyBase {
    /**
     * Required. Hostname for the MySQL connection.
     */
    hostname?: string;
    /**
     * Required. Input only. Password for the MySQL connection.
     */
    password?: string;
    /**
     * Port for the MySQL connection, default value is 3306.
     */
    port?: number;
    /**
     * MySQL SSL configuration information.
     */
    sslConfig?: MysqlSslConfigInput;
    /**
     * Required. Username for the MySQL connection.
     */
    username?: string;
}
