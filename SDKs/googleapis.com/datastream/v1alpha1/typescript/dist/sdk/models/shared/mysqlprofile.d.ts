import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlSslConfig } from "./mysqlsslconfig";
import { MysqlSslConfigInput } from "./mysqlsslconfig";
/**
 * MySQL database profile.
**/
export declare class MysqlProfile extends SpeakeasyBase {
    hostname?: string;
    password?: string;
    port?: number;
    sslConfig?: MysqlSslConfig;
    username?: string;
}
/**
 * MySQL database profile.
**/
export declare class MysqlProfileInput extends SpeakeasyBase {
    hostname?: string;
    password?: string;
    port?: number;
    sslConfig?: MysqlSslConfigInput;
    username?: string;
}
