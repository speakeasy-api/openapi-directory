import { SpeakeasyBase } from "../../../internal/utils";
import { CloudSqlCredential } from "./cloudsqlcredential";
/**
 * Type of the Cloud SQL database.
 */
export declare enum CloudSqlPropertiesTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED",
    Postgres = "POSTGRES",
    Mysql = "MYSQL"
}
/**
 * Connection properties specific to the Cloud SQL.
 */
export declare class CloudSqlProperties extends SpeakeasyBase {
    /**
     * Credential info for the Cloud SQL.
     */
    credential?: CloudSqlCredential;
    /**
     * Database name.
     */
    database?: string;
    /**
     * Cloud SQL instance ID in the form `project:location:instance`.
     */
    instanceId?: string;
    /**
     * Output only. The account ID of the service used for the purpose of this connection. When the connection is used in the context of an operation in BigQuery, this service account will serve as the identity being used for connecting to the CloudSQL instance specified in this connection.
     */
    serviceAccountId?: string;
    /**
     * Type of the Cloud SQL database.
     */
    type?: CloudSqlPropertiesTypeEnum;
}
/**
 * Connection properties specific to the Cloud SQL.
 */
export declare class CloudSqlPropertiesInput extends SpeakeasyBase {
    /**
     * Credential info for the Cloud SQL.
     */
    credential?: CloudSqlCredential;
    /**
     * Database name.
     */
    database?: string;
    /**
     * Cloud SQL instance ID in the form `project:location:instance`.
     */
    instanceId?: string;
    /**
     * Type of the Cloud SQL database.
     */
    type?: CloudSqlPropertiesTypeEnum;
}
