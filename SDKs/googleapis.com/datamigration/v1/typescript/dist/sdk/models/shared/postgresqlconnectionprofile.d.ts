import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateServiceConnectConnectivity } from "./privateserviceconnectconnectivity";
import { SslConfig, SslConfigInput } from "./sslconfig";
/**
 * Output only. If the source is a Cloud SQL database, this field indicates the network architecture it's associated with.
 */
export declare enum PostgreSqlConnectionProfileNetworkArchitectureEnum {
    NetworkArchitectureUnspecified = "NETWORK_ARCHITECTURE_UNSPECIFIED",
    NetworkArchitectureOldCsqlProducer = "NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER",
    NetworkArchitectureNewCsqlProducer = "NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER"
}
/**
 * Specifies connection parameters required specifically for PostgreSQL databases.
 */
export declare class PostgreSqlConnectionProfile extends SpeakeasyBase {
    /**
     * If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.
     */
    cloudSqlId?: string;
    /**
     * Required. The IP or hostname of the source PostgreSQL database.
     */
    host?: string;
    /**
     * Output only. If the source is a Cloud SQL database, this field indicates the network architecture it's associated with.
     */
    networkArchitecture?: PostgreSqlConnectionProfileNetworkArchitectureEnum;
    /**
     * Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
     */
    password?: string;
    /**
     * Output only. Indicates If this connection profile password is stored.
     */
    passwordSet?: boolean;
    /**
     * Required. The network port of the source PostgreSQL database.
     */
    port?: number;
    /**
     * Private Service Connect connectivity (https://cloud.google.com/vpc/docs/private-service-connect#benefits-services)
     */
    privateServiceConnectConnectivity?: PrivateServiceConnectConnectivity;
    /**
     * SSL configuration information.
     */
    ssl?: SslConfig;
    /**
     * The source database will allow incoming connections from the public IP of the destination database. You can retrieve the public IP of the Cloud SQL instance from the Cloud SQL console or using Cloud SQL APIs. No additional configuration is required.
     */
    staticIpConnectivity?: Record<string, any>;
    /**
     * Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
     */
    username?: string;
}
/**
 * Specifies connection parameters required specifically for PostgreSQL databases.
 */
export declare class PostgreSqlConnectionProfileInput extends SpeakeasyBase {
    /**
     * If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.
     */
    cloudSqlId?: string;
    /**
     * Required. The IP or hostname of the source PostgreSQL database.
     */
    host?: string;
    /**
     * Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
     */
    password?: string;
    /**
     * Required. The network port of the source PostgreSQL database.
     */
    port?: number;
    /**
     * Private Service Connect connectivity (https://cloud.google.com/vpc/docs/private-service-connect#benefits-services)
     */
    privateServiceConnectConnectivity?: PrivateServiceConnectConnectivity;
    /**
     * SSL configuration information.
     */
    ssl?: SslConfigInput;
    /**
     * The source database will allow incoming connections from the public IP of the destination database. You can retrieve the public IP of the Cloud SQL instance from the Cloud SQL console or using Cloud SQL APIs. No additional configuration is required.
     */
    staticIpConnectivity?: Record<string, any>;
    /**
     * Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
     */
    username?: string;
}
