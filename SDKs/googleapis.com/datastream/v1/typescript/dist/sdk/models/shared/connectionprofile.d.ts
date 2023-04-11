import { SpeakeasyBase } from "../../../internal/utils";
import { ForwardSshTunnelConnectivity } from "./forwardsshtunnelconnectivity";
import { GcsProfile } from "./gcsprofile";
import { MysqlProfile, MysqlProfileInput } from "./mysqlprofile";
import { OracleProfile } from "./oracleprofile";
import { PostgresqlProfile } from "./postgresqlprofile";
import { PrivateConnectivity } from "./privateconnectivity";
/**
 * A set of reusable connection configurations to be used as a source or destination for a stream.
 */
export declare class ConnectionProfile extends SpeakeasyBase {
    /**
     * BigQuery warehouse profile.
     */
    bigqueryProfile?: Record<string, any>;
    /**
     * Output only. The create time of the resource.
     */
    createTime?: string;
    /**
     * Required. Display name.
     */
    displayName?: string;
    /**
     * Forward SSH Tunnel connectivity.
     */
    forwardSshConnectivity?: ForwardSshTunnelConnectivity;
    /**
     * Cloud Storage bucket profile.
     */
    gcsProfile?: GcsProfile;
    /**
     * Labels.
     */
    labels?: Record<string, string>;
    /**
     * MySQL database profile.
     */
    mysqlProfile?: MysqlProfile;
    /**
     * Output only. The resource's name.
     */
    name?: string;
    /**
     * Oracle database profile.
     */
    oracleProfile?: OracleProfile;
    /**
     * PostgreSQL database profile.
     */
    postgresqlProfile?: PostgresqlProfile;
    /**
     * Private Connectivity
     */
    privateConnectivity?: PrivateConnectivity;
    /**
     * Static IP address connectivity. Used when the source database is configured to allow incoming connections from the Datastream public IP addresses for the region specified in the connection profile.
     */
    staticServiceIpConnectivity?: Record<string, any>;
    /**
     * Output only. The update time of the resource.
     */
    updateTime?: string;
}
/**
 * A set of reusable connection configurations to be used as a source or destination for a stream.
 */
export declare class ConnectionProfileInput extends SpeakeasyBase {
    /**
     * BigQuery warehouse profile.
     */
    bigqueryProfile?: Record<string, any>;
    /**
     * Required. Display name.
     */
    displayName?: string;
    /**
     * Forward SSH Tunnel connectivity.
     */
    forwardSshConnectivity?: ForwardSshTunnelConnectivity;
    /**
     * Cloud Storage bucket profile.
     */
    gcsProfile?: GcsProfile;
    /**
     * Labels.
     */
    labels?: Record<string, string>;
    /**
     * MySQL database profile.
     */
    mysqlProfile?: MysqlProfileInput;
    /**
     * Oracle database profile.
     */
    oracleProfile?: OracleProfile;
    /**
     * PostgreSQL database profile.
     */
    postgresqlProfile?: PostgresqlProfile;
    /**
     * Private Connectivity
     */
    privateConnectivity?: PrivateConnectivity;
    /**
     * Static IP address connectivity. Used when the source database is configured to allow incoming connections from the Datastream public IP addresses for the region specified in the connection profile.
     */
    staticServiceIpConnectivity?: Record<string, any>;
}
