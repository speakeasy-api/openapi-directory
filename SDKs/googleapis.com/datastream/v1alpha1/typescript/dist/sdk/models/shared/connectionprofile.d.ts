import { SpeakeasyBase } from "../../../internal/utils";
import { ForwardSshTunnelConnectivity } from "./forwardsshtunnelconnectivity";
import { GcsProfile } from "./gcsprofile";
import { MysqlProfile, MysqlProfileInput } from "./mysqlprofile";
import { OracleProfile } from "./oracleprofile";
import { PrivateConnectivity } from "./privateconnectivity";
export declare class ConnectionProfile extends SpeakeasyBase {
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
     * No connectivity settings.
     */
    noConnectivity?: Record<string, any>;
    /**
     * Oracle database profile.
     */
    oracleProfile?: OracleProfile;
    /**
     * Private Connectivity
     */
    privateConnectivity?: PrivateConnectivity;
    /**
     * Static IP address connectivity.
     */
    staticServiceIpConnectivity?: Record<string, any>;
    /**
     * Output only. The update time of the resource.
     */
    updateTime?: string;
}
export declare class ConnectionProfileInput extends SpeakeasyBase {
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
     * No connectivity settings.
     */
    noConnectivity?: Record<string, any>;
    /**
     * Oracle database profile.
     */
    oracleProfile?: OracleProfile;
    /**
     * Private Connectivity
     */
    privateConnectivity?: PrivateConnectivity;
    /**
     * Static IP address connectivity.
     */
    staticServiceIpConnectivity?: Record<string, any>;
}
