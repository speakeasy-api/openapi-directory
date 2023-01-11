import { SpeakeasyBase } from "../../../internal/utils";
import { ForwardSshTunnelConnectivity } from "./forwardsshtunnelconnectivity";
import { GcsProfile } from "./gcsprofile";
import { MysqlProfile } from "./mysqlprofile";
import { OracleProfile } from "./oracleprofile";
import { PostgresqlProfile } from "./postgresqlprofile";
import { PrivateConnectivity } from "./privateconnectivity";
import { MysqlProfileInput } from "./mysqlprofile";
/**
 * A set of reusable connection configurations to be used as a source or destination for a stream.
**/
export declare class ConnectionProfile extends SpeakeasyBase {
    bigqueryProfile?: Record<string, any>;
    createTime?: string;
    displayName?: string;
    forwardSshConnectivity?: ForwardSshTunnelConnectivity;
    gcsProfile?: GcsProfile;
    labels?: Record<string, string>;
    mysqlProfile?: MysqlProfile;
    name?: string;
    oracleProfile?: OracleProfile;
    postgresqlProfile?: PostgresqlProfile;
    privateConnectivity?: PrivateConnectivity;
    staticServiceIpConnectivity?: Record<string, any>;
    updateTime?: string;
}
/**
 * A set of reusable connection configurations to be used as a source or destination for a stream.
**/
export declare class ConnectionProfileInput extends SpeakeasyBase {
    bigqueryProfile?: Record<string, any>;
    displayName?: string;
    forwardSshConnectivity?: ForwardSshTunnelConnectivity;
    gcsProfile?: GcsProfile;
    labels?: Record<string, string>;
    mysqlProfile?: MysqlProfileInput;
    oracleProfile?: OracleProfile;
    postgresqlProfile?: PostgresqlProfile;
    privateConnectivity?: PrivateConnectivity;
    staticServiceIpConnectivity?: Record<string, any>;
}
