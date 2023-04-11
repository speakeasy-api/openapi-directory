import { SpeakeasyBase } from "../../../internal/utils";
import { ForwardSshTunnelConnectivity } from "./forwardsshtunnelconnectivity";
import { PrivateConnectivity } from "./privateconnectivity";
/**
 * Specifies connection parameters required specifically for Oracle databases.
 */
export declare class OracleConnectionProfile extends SpeakeasyBase {
    /**
     * Required. Database service for the Oracle connection.
     */
    databaseService?: string;
    /**
     * Forward SSH Tunnel connectivity.
     */
    forwardSshConnectivity?: ForwardSshTunnelConnectivity;
    /**
     * Required. The IP or hostname of the source Oracle database.
     */
    host?: string;
    /**
     * Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
     */
    password?: string;
    /**
     * Output only. Indicates whether a new password is included in the request.
     */
    passwordSet?: boolean;
    /**
     * Required. The network port of the source Oracle database.
     */
    port?: number;
    /**
     * Private Connectivity.
     */
    privateConnectivity?: PrivateConnectivity;
    /**
     * Static IP address connectivity configured on service project.
     */
    staticServiceIpConnectivity?: Record<string, any>;
    /**
     * Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
     */
    username?: string;
}
/**
 * Specifies connection parameters required specifically for Oracle databases.
 */
export declare class OracleConnectionProfileInput extends SpeakeasyBase {
    /**
     * Required. Database service for the Oracle connection.
     */
    databaseService?: string;
    /**
     * Forward SSH Tunnel connectivity.
     */
    forwardSshConnectivity?: ForwardSshTunnelConnectivity;
    /**
     * Required. The IP or hostname of the source Oracle database.
     */
    host?: string;
    /**
     * Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
     */
    password?: string;
    /**
     * Required. The network port of the source Oracle database.
     */
    port?: number;
    /**
     * Private Connectivity.
     */
    privateConnectivity?: PrivateConnectivity;
    /**
     * Static IP address connectivity configured on service project.
     */
    staticServiceIpConnectivity?: Record<string, any>;
    /**
     * Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
     */
    username?: string;
}
