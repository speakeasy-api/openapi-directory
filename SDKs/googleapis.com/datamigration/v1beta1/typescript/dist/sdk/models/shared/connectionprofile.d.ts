import { SpeakeasyBase } from "../../../internal/utils";
import { CloudSqlConnectionProfile, CloudSqlConnectionProfileInput } from "./cloudsqlconnectionprofile";
import { MySqlConnectionProfile, MySqlConnectionProfileInput } from "./mysqlconnectionprofile";
import { Status } from "./status";
/**
 * The database provider.
 */
export declare enum ConnectionProfileProviderEnum {
    DatabaseProviderUnspecified = "DATABASE_PROVIDER_UNSPECIFIED",
    Cloudsql = "CLOUDSQL",
    Rds = "RDS"
}
/**
 * The current connection profile state (e.g. DRAFT, READY, or FAILED).
 */
export declare enum ConnectionProfileStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Creating = "CREATING",
    Ready = "READY",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED"
}
/**
 * A connection profile definition.
 */
export declare class ConnectionProfile extends SpeakeasyBase {
    /**
     * Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
     */
    cloudsql?: CloudSqlConnectionProfile;
    /**
     * Output only. The timestamp when the resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
     */
    createTime?: string;
    /**
     * The connection profile display name.
     */
    displayName?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.
     */
    labels?: Record<string, string>;
    /**
     * Specifies connection parameters required specifically for MySQL databases.
     */
    mysql?: MySqlConnectionProfile;
    /**
     * The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}.
     */
    name?: string;
    /**
     * The database provider.
     */
    provider?: ConnectionProfileProviderEnum;
    /**
     * The current connection profile state (e.g. DRAFT, READY, or FAILED).
     */
    state?: ConnectionProfileStateEnum;
    /**
     * Output only. The timestamp when the resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
     */
    updateTime?: string;
}
/**
 * A connection profile definition.
 */
export declare class ConnectionProfileInput extends SpeakeasyBase {
    /**
     * Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
     */
    cloudsql?: CloudSqlConnectionProfileInput;
    /**
     * The connection profile display name.
     */
    displayName?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.
     */
    labels?: Record<string, string>;
    /**
     * Specifies connection parameters required specifically for MySQL databases.
     */
    mysql?: MySqlConnectionProfileInput;
    /**
     * The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}.
     */
    name?: string;
    /**
     * The database provider.
     */
    provider?: ConnectionProfileProviderEnum;
    /**
     * The current connection profile state (e.g. DRAFT, READY, or FAILED).
     */
    state?: ConnectionProfileStateEnum;
}
