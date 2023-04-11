import { SpeakeasyBase } from "../../../internal/utils";
import { CloudSqlCredential } from "./cloudsqlcredential";
/**
 * Credential to use with a connection.
 */
export declare class ConnectionCredential extends SpeakeasyBase {
    /**
     * Credential info for the Cloud SQL.
     */
    cloudSql?: CloudSqlCredential;
}
