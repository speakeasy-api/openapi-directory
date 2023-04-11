import { SpeakeasyBase } from "../../../internal/utils";
import { ConversionWorkspaceInfo } from "./conversionworkspaceinfo";
import { DatabaseType } from "./databasetype";
import { DumpFlags } from "./dumpflags";
import { ReverseSshConnectivity } from "./reversesshconnectivity";
import { Status } from "./status";
import { VpcPeeringConnectivity } from "./vpcpeeringconnectivity";
/**
 * The current migration job state.
 */
export declare enum MigrationJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Maintenance = "MAINTENANCE",
    Draft = "DRAFT",
    Creating = "CREATING",
    NotStarted = "NOT_STARTED",
    Running = "RUNNING",
    Failed = "FAILED",
    Completed = "COMPLETED",
    Deleting = "DELETING",
    Stopping = "STOPPING",
    Stopped = "STOPPED",
    Deleted = "DELETED",
    Updating = "UPDATING",
    Starting = "STARTING",
    Restarting = "RESTARTING",
    Resuming = "RESUMING"
}
/**
 * Required. The migration job type.
 */
export declare enum MigrationJobTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    OneTime = "ONE_TIME",
    Continuous = "CONTINUOUS"
}
/**
 * Represents a Database Migration Service migration job object.
 */
export declare class MigrationJobInput extends SpeakeasyBase {
    /**
     * A conversion workspace's version.
     */
    conversionWorkspace?: ConversionWorkspaceInfo;
    /**
     * Required. The resource name (URI) of the destination connection profile.
     */
    destination?: string;
    /**
     * A message defining the database engine and provider.
     */
    destinationDatabase?: DatabaseType;
    /**
     * The migration job display name.
     */
    displayName?: string;
    /**
     * Dump flags definition.
     */
    dumpFlags?: DumpFlags;
    /**
     * The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). This field and the "dump_flags" field are mutually exclusive.
     */
    dumpPath?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * This field can be used to select the entities to migrate as part of the migration job. It uses AIP-160 notation to select a subset of the entities configured on the associated conversion-workspace. This field should not be set on migration-jobs that are not associated with a conversion workspace.
     */
    filter?: string;
    /**
     * The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.
     */
    labels?: Record<string, string>;
    /**
     * The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}.
     */
    name?: string;
    /**
     * The details needed to configure a reverse SSH tunnel between the source and destination databases. These details will be used when calling the generateSshScript method (see https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.migrationJobs/generateSshScript) to produce the script that will help set up the reverse SSH tunnel, and to set up the VPC peering between the Cloud SQL private network and the VPC.
     */
    reverseSshConnectivity?: ReverseSshConnectivity;
    /**
     * Required. The resource name (URI) of the source connection profile.
     */
    source?: string;
    /**
     * A message defining the database engine and provider.
     */
    sourceDatabase?: DatabaseType;
    /**
     * The current migration job state.
     */
    state?: MigrationJobStateEnum;
    /**
     * The source database will allow incoming connections from the public IP of the destination database. You can retrieve the public IP of the Cloud SQL instance from the Cloud SQL console or using Cloud SQL APIs. No additional configuration is required.
     */
    staticIpConnectivity?: Record<string, any>;
    /**
     * Required. The migration job type.
     */
    type?: MigrationJobTypeEnum;
    /**
     * The details of the VPC where the source database is located in Google Cloud. We will use this information to set up the VPC peering connection between Cloud SQL and this VPC.
     */
    vpcPeeringConnectivity?: VpcPeeringConnectivity;
}
/**
 * Output only. The current migration job phase.
 */
export declare enum MigrationJobPhaseEnum {
    PhaseUnspecified = "PHASE_UNSPECIFIED",
    FullDump = "FULL_DUMP",
    Cdc = "CDC",
    PromoteInProgress = "PROMOTE_IN_PROGRESS",
    WaitingForSourceWritesToStop = "WAITING_FOR_SOURCE_WRITES_TO_STOP",
    PreparingTheDump = "PREPARING_THE_DUMP"
}
/**
 * Represents a Database Migration Service migration job object.
 */
export declare class MigrationJob extends SpeakeasyBase {
    /**
     * A conversion workspace's version.
     */
    conversionWorkspace?: ConversionWorkspaceInfo;
    /**
     * Output only. The timestamp when the migration job resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
     */
    createTime?: string;
    /**
     * Required. The resource name (URI) of the destination connection profile.
     */
    destination?: string;
    /**
     * A message defining the database engine and provider.
     */
    destinationDatabase?: DatabaseType;
    /**
     * The migration job display name.
     */
    displayName?: string;
    /**
     * Dump flags definition.
     */
    dumpFlags?: DumpFlags;
    /**
     * The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). This field and the "dump_flags" field are mutually exclusive.
     */
    dumpPath?: string;
    /**
     * Output only. The duration of the migration job (in seconds). A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
     */
    duration?: string;
    /**
     * Output only. If the migration job is completed, the time when it was completed.
     */
    endTime?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * This field can be used to select the entities to migrate as part of the migration job. It uses AIP-160 notation to select a subset of the entities configured on the associated conversion-workspace. This field should not be set on migration-jobs that are not associated with a conversion workspace.
     */
    filter?: string;
    /**
     * The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.
     */
    labels?: Record<string, string>;
    /**
     * The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}.
     */
    name?: string;
    /**
     * Output only. The current migration job phase.
     */
    phase?: MigrationJobPhaseEnum;
    /**
     * The details needed to configure a reverse SSH tunnel between the source and destination databases. These details will be used when calling the generateSshScript method (see https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.migrationJobs/generateSshScript) to produce the script that will help set up the reverse SSH tunnel, and to set up the VPC peering between the Cloud SQL private network and the VPC.
     */
    reverseSshConnectivity?: ReverseSshConnectivity;
    /**
     * Required. The resource name (URI) of the source connection profile.
     */
    source?: string;
    /**
     * A message defining the database engine and provider.
     */
    sourceDatabase?: DatabaseType;
    /**
     * The current migration job state.
     */
    state?: MigrationJobStateEnum;
    /**
     * The source database will allow incoming connections from the public IP of the destination database. You can retrieve the public IP of the Cloud SQL instance from the Cloud SQL console or using Cloud SQL APIs. No additional configuration is required.
     */
    staticIpConnectivity?: Record<string, any>;
    /**
     * Required. The migration job type.
     */
    type?: MigrationJobTypeEnum;
    /**
     * Output only. The timestamp when the migration job resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
     */
    updateTime?: string;
    /**
     * The details of the VPC where the source database is located in Google Cloud. We will use this information to set up the VPC peering connection between Cloud SQL and this VPC.
     */
    vpcPeeringConnectivity?: VpcPeeringConnectivity;
}
