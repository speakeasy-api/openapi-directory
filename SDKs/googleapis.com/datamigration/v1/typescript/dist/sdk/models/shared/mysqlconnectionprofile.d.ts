import { SpeakeasyBase } from "../../../internal/utils";
import { SslConfig, SslConfigInput } from "./sslconfig";
/**
 * Specifies connection parameters required specifically for MySQL databases.
 */
export declare class MySqlConnectionProfile extends SpeakeasyBase {
    /**
     * If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.
     */
    cloudSqlId?: string;
    /**
     * Required. The IP or hostname of the source MySQL database.
     */
    host?: string;
    /**
     * Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
     */
    password?: string;
    /**
     * Output only. Indicates If this connection profile password is stored.
     */
    passwordSet?: boolean;
    /**
     * Required. The network port of the source MySQL database.
     */
    port?: number;
    /**
     * SSL configuration information.
     */
    ssl?: SslConfig;
    /**
     * Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
     */
    username?: string;
}
/**
 * Specifies connection parameters required specifically for MySQL databases.
 */
export declare class MySqlConnectionProfileInput extends SpeakeasyBase {
    /**
     * If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.
     */
    cloudSqlId?: string;
    /**
     * Required. The IP or hostname of the source MySQL database.
     */
    host?: string;
    /**
     * Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
     */
    password?: string;
    /**
     * Required. The network port of the source MySQL database.
     */
    port?: number;
    /**
     * SSL configuration information.
     */
    ssl?: SslConfigInput;
    /**
     * Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
     */
    username?: string;
}
