/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import {
  CloudSqlConnectionProfile,
  CloudSqlConnectionProfileInput,
} from "./cloudsqlconnectionprofile";
import {
  MySqlConnectionProfile,
  MySqlConnectionProfileInput,
} from "./mysqlconnectionprofile";
import { Status } from "./status";
import { Expose, Type } from "class-transformer";

/**
 * The database provider.
 */
export enum ConnectionProfileProviderEnum {
  DatabaseProviderUnspecified = "DATABASE_PROVIDER_UNSPECIFIED",
  Cloudsql = "CLOUDSQL",
  Rds = "RDS",
}

/**
 * The current connection profile state (e.g. DRAFT, READY, or FAILED).
 */
export enum ConnectionProfileStateEnum {
  StateUnspecified = "STATE_UNSPECIFIED",
  Draft = "DRAFT",
  Creating = "CREATING",
  Ready = "READY",
  Updating = "UPDATING",
  Deleting = "DELETING",
  Deleted = "DELETED",
  Failed = "FAILED",
}

/**
 * A connection profile definition.
 */
export class ConnectionProfile extends SpeakeasyBase {
  /**
   * Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "cloudsql" })
  @Type(() => CloudSqlConnectionProfile)
  cloudsql?: CloudSqlConnectionProfile;

  /**
   * Output only. The timestamp when the resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createTime" })
  createTime?: string;

  /**
   * The connection profile display name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  @Type(() => Status)
  error?: Status;

  /**
   * The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "labels" })
  labels?: Record<string, string>;

  /**
   * Specifies connection parameters required specifically for MySQL databases.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "mysql" })
  @Type(() => MySqlConnectionProfile)
  mysql?: MySqlConnectionProfile;

  /**
   * The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The database provider.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider?: ConnectionProfileProviderEnum;

  /**
   * The current connection profile state (e.g. DRAFT, READY, or FAILED).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: ConnectionProfileStateEnum;

  /**
   * Output only. The timestamp when the resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updateTime" })
  updateTime?: string;
}

/**
 * A connection profile definition.
 */
export class ConnectionProfileInput extends SpeakeasyBase {
  /**
   * Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "cloudsql" })
  @Type(() => CloudSqlConnectionProfileInput)
  cloudsql?: CloudSqlConnectionProfileInput;

  /**
   * The connection profile display name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  @Type(() => Status)
  error?: Status;

  /**
   * The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "labels" })
  labels?: Record<string, string>;

  /**
   * Specifies connection parameters required specifically for MySQL databases.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "mysql" })
  @Type(() => MySqlConnectionProfileInput)
  mysql?: MySqlConnectionProfileInput;

  /**
   * The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The database provider.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider?: ConnectionProfileProviderEnum;

  /**
   * The current connection profile state (e.g. DRAFT, READY, or FAILED).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: ConnectionProfileStateEnum;
}
