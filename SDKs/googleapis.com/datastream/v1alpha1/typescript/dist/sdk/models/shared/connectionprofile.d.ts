import { SpeakeasyBase } from "../../../internal/utils";
import { ForwardSshTunnelConnectivity } from "./forwardsshtunnelconnectivity";
import { GcsProfile } from "./gcsprofile";
import { MysqlProfile } from "./mysqlprofile";
import { OracleProfile } from "./oracleprofile";
import { PrivateConnectivity } from "./privateconnectivity";
import { MysqlProfileInput } from "./mysqlprofile";
export declare class ConnectionProfile extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    forwardSshConnectivity?: ForwardSshTunnelConnectivity;
    gcsProfile?: GcsProfile;
    labels?: Record<string, string>;
    mysqlProfile?: MysqlProfile;
    name?: string;
    noConnectivity?: Record<string, any>;
    oracleProfile?: OracleProfile;
    privateConnectivity?: PrivateConnectivity;
    staticServiceIpConnectivity?: Record<string, any>;
    updateTime?: string;
}
export declare class ConnectionProfileInput extends SpeakeasyBase {
    displayName?: string;
    forwardSshConnectivity?: ForwardSshTunnelConnectivity;
    gcsProfile?: GcsProfile;
    labels?: Record<string, string>;
    mysqlProfile?: MysqlProfileInput;
    noConnectivity?: Record<string, any>;
    oracleProfile?: OracleProfile;
    privateConnectivity?: PrivateConnectivity;
    staticServiceIpConnectivity?: Record<string, any>;
}
