import { SpeakeasyBase } from "../../../internal/utils";
import { DiskEncryptionConfiguration } from "./diskencryptionconfiguration";
import { DiskEncryptionStatus } from "./diskencryptionstatus";
import { IpMapping } from "./ipmapping";
import { OnPremisesConfiguration } from "./onpremisesconfiguration";
import { ReplicaConfiguration } from "./replicaconfiguration";
import { Settings } from "./settings";
import { SqlOutOfDiskReport } from "./sqloutofdiskreport";
import { SqlScheduledMaintenance } from "./sqlscheduledmaintenance";
import { SslCert } from "./sslcert";
/**
 * The backend type. `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type.
 */
export declare enum DatabaseInstanceBackendTypeEnum {
    SqlBackendTypeUnspecified = "SQL_BACKEND_TYPE_UNSPECIFIED",
    FirstGen = "FIRST_GEN",
    SecondGen = "SECOND_GEN",
    External = "EXTERNAL"
}
/**
 * The database engine type and version. The `databaseVersion` field cannot be changed after instance creation.
 */
export declare enum DatabaseInstanceDatabaseVersionEnum {
    SqlDatabaseVersionUnspecified = "SQL_DATABASE_VERSION_UNSPECIFIED",
    Mysql51 = "MYSQL_5_1",
    Mysql55 = "MYSQL_5_5",
    Mysql56 = "MYSQL_5_6",
    Mysql57 = "MYSQL_5_7",
    Sqlserver2017Standard = "SQLSERVER_2017_STANDARD",
    Sqlserver2017Enterprise = "SQLSERVER_2017_ENTERPRISE",
    Sqlserver2017Express = "SQLSERVER_2017_EXPRESS",
    Sqlserver2017Web = "SQLSERVER_2017_WEB",
    Postgres96 = "POSTGRES_9_6",
    Postgres10 = "POSTGRES_10",
    Postgres11 = "POSTGRES_11",
    Postgres12 = "POSTGRES_12",
    Postgres13 = "POSTGRES_13",
    Postgres14 = "POSTGRES_14",
    Mysql80 = "MYSQL_8_0",
    Mysql8018 = "MYSQL_8_0_18",
    Mysql8026 = "MYSQL_8_0_26",
    Mysql8027 = "MYSQL_8_0_27",
    Mysql8028 = "MYSQL_8_0_28",
    Mysql8029 = "MYSQL_8_0_29",
    Mysql8030 = "MYSQL_8_0_30",
    Mysql8031 = "MYSQL_8_0_31",
    Mysql8032 = "MYSQL_8_0_32",
    Sqlserver2019Standard = "SQLSERVER_2019_STANDARD",
    Sqlserver2019Enterprise = "SQLSERVER_2019_ENTERPRISE",
    Sqlserver2019Express = "SQLSERVER_2019_EXPRESS",
    Sqlserver2019Web = "SQLSERVER_2019_WEB"
}
/**
 * The name and status of the failover replica.
 */
export declare class DatabaseInstanceFailoverReplica extends SpeakeasyBase {
    /**
     * The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The primary instance can only failover to the failover replica when the status is true.
     */
    available?: boolean;
    /**
     * The name of the failover replica. If specified at instance creation, a failover replica is created for the instance. The name doesn't include the project ID.
     */
    name?: string;
}
/**
 * The instance type.
 */
export declare enum DatabaseInstanceInstanceTypeEnum {
    SqlInstanceTypeUnspecified = "SQL_INSTANCE_TYPE_UNSPECIFIED",
    CloudSqlInstance = "CLOUD_SQL_INSTANCE",
    OnPremisesInstance = "ON_PREMISES_INSTANCE",
    ReadReplicaInstance = "READ_REPLICA_INSTANCE"
}
/**
 * The current serving state of the Cloud SQL instance.
 */
export declare enum DatabaseInstanceStateEnum {
    SqlInstanceStateUnspecified = "SQL_INSTANCE_STATE_UNSPECIFIED",
    Runnable = "RUNNABLE",
    Suspended = "SUSPENDED",
    PendingDelete = "PENDING_DELETE",
    PendingCreate = "PENDING_CREATE",
    Maintenance = "MAINTENANCE",
    Failed = "FAILED",
    OnlineMaintenance = "ONLINE_MAINTENANCE"
}
export declare enum DatabaseInstanceSuspensionReasonEnum {
    SqlSuspensionReasonUnspecified = "SQL_SUSPENSION_REASON_UNSPECIFIED",
    BillingIssue = "BILLING_ISSUE",
    LegalIssue = "LEGAL_ISSUE",
    OperationalIssue = "OPERATIONAL_ISSUE",
    KmsKeyIssue = "KMS_KEY_ISSUE"
}
/**
 * A Cloud SQL instance resource.
 */
export declare class DatabaseInstanceInput extends SpeakeasyBase {
    /**
     * List all maintenance versions applicable on the instance
     */
    availableMaintenanceVersions?: string[];
    /**
     * The backend type. `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type.
     */
    backendType?: DatabaseInstanceBackendTypeEnum;
    /**
     * Connection name of the Cloud SQL instance used in connection strings.
     */
    connectionName?: string;
    /**
     * The current disk usage of the instance in bytes. This property has been deprecated. Use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see [this announcement](https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ) for details.
     */
    currentDiskSize?: string;
    /**
     * The database engine type and version. The `databaseVersion` field cannot be changed after instance creation.
     */
    databaseVersion?: DatabaseInstanceDatabaseVersionEnum;
    /**
     * Disk encryption configuration for an instance.
     */
    diskEncryptionConfiguration?: DiskEncryptionConfiguration;
    /**
     * Disk encryption status for an instance.
     */
    diskEncryptionStatus?: DiskEncryptionStatus;
    /**
     * This field is deprecated and will be removed from a future version of the API. Use the `settings.settingsVersion` field instead.
     */
    etag?: string;
    /**
     * The name and status of the failover replica.
     */
    failoverReplica?: DatabaseInstanceFailoverReplica;
    /**
     * The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone. WARNING: Changing this might restart the instance.
     */
    gceZone?: string;
    /**
     * The instance type.
     */
    instanceType?: DatabaseInstanceInstanceTypeEnum;
    /**
     * The assigned IP addresses for the instance.
     */
    ipAddresses?: IpMapping[];
    /**
     * The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances.
     */
    ipv6Address?: string;
    /**
     * This is always `sql#instance`.
     */
    kind?: string;
    /**
     * The current software version on the instance.
     */
    maintenanceVersion?: string;
    /**
     * The name of the instance which will act as primary in the replication setup.
     */
    masterInstanceName?: string;
    /**
     * The maximum disk size of the instance in bytes.
     */
    maxDiskSize?: string;
    /**
     * Name of the Cloud SQL instance. This does not include the project ID.
     */
    name?: string;
    /**
     * On-premises instance configuration.
     */
    onPremisesConfiguration?: OnPremisesConfiguration;
    /**
     * This message wraps up the information written by out-of-disk detection job.
     */
    outOfDiskReport?: SqlOutOfDiskReport;
    /**
     * The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.
     */
    project?: string;
    /**
     * The geographical region. Can be: * `us-central` (`FIRST_GEN` instances only) * `us-central1` (`SECOND_GEN` instances only) * `asia-east1` or `europe-west1`. Defaults to `us-central` or `us-central1` depending on the instance type. The region cannot be changed after instance creation.
     */
    region?: string;
    /**
     * Read-replica configuration for connecting to the primary instance.
     */
    replicaConfiguration?: ReplicaConfiguration;
    /**
     * The replicas of the instance.
     */
    replicaNames?: string[];
    /**
     * Initial root password. Use only on creation. You must set root passwords before you can connect to PostgreSQL instances.
     */
    rootPassword?: string;
    /**
     * The status indicating if instance satisfiesPzs. Reserved for future use.
     */
    satisfiesPzs?: boolean;
    /**
     * Any scheduled maintenance for this instance.
     */
    scheduledMaintenance?: SqlScheduledMaintenance;
    /**
     * The Compute Engine zone that the failover instance is currently serving from for a regional instance. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary/failover zone.
     */
    secondaryGceZone?: string;
    /**
     * The URI of this resource.
     */
    selfLink?: string;
    /**
     * SslCerts Resource
     */
    serverCaCert?: SslCert;
    /**
     * The service account email address assigned to the instance.\This property is read-only.
     */
    serviceAccountEmailAddress?: string;
    /**
     * Database instance settings.
     */
    settings?: Settings;
    /**
     * The current serving state of the Cloud SQL instance.
     */
    state?: DatabaseInstanceStateEnum;
    /**
     * If the instance state is SUSPENDED, the reason for the suspension.
     */
    suspensionReason?: DatabaseInstanceSuspensionReasonEnum[];
}
/**
 * A Cloud SQL instance resource.
 */
export declare class DatabaseInstance extends SpeakeasyBase {
    /**
     * List all maintenance versions applicable on the instance
     */
    availableMaintenanceVersions?: string[];
    /**
     * The backend type. `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type.
     */
    backendType?: DatabaseInstanceBackendTypeEnum;
    /**
     * Connection name of the Cloud SQL instance used in connection strings.
     */
    connectionName?: string;
    /**
     * Output only. The time when the instance was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    createTime?: string;
    /**
     * The current disk usage of the instance in bytes. This property has been deprecated. Use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see [this announcement](https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ) for details.
     */
    currentDiskSize?: string;
    /**
     * Output only. Stores the current database version running on the instance including minor version such as `MYSQL_8_0_18`.
     */
    databaseInstalledVersion?: string;
    /**
     * The database engine type and version. The `databaseVersion` field cannot be changed after instance creation.
     */
    databaseVersion?: DatabaseInstanceDatabaseVersionEnum;
    /**
     * Disk encryption configuration for an instance.
     */
    diskEncryptionConfiguration?: DiskEncryptionConfiguration;
    /**
     * Disk encryption status for an instance.
     */
    diskEncryptionStatus?: DiskEncryptionStatus;
    /**
     * This field is deprecated and will be removed from a future version of the API. Use the `settings.settingsVersion` field instead.
     */
    etag?: string;
    /**
     * The name and status of the failover replica.
     */
    failoverReplica?: DatabaseInstanceFailoverReplica;
    /**
     * The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone. WARNING: Changing this might restart the instance.
     */
    gceZone?: string;
    /**
     * The instance type.
     */
    instanceType?: DatabaseInstanceInstanceTypeEnum;
    /**
     * The assigned IP addresses for the instance.
     */
    ipAddresses?: IpMapping[];
    /**
     * The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances.
     */
    ipv6Address?: string;
    /**
     * This is always `sql#instance`.
     */
    kind?: string;
    /**
     * The current software version on the instance.
     */
    maintenanceVersion?: string;
    /**
     * The name of the instance which will act as primary in the replication setup.
     */
    masterInstanceName?: string;
    /**
     * The maximum disk size of the instance in bytes.
     */
    maxDiskSize?: string;
    /**
     * Name of the Cloud SQL instance. This does not include the project ID.
     */
    name?: string;
    /**
     * On-premises instance configuration.
     */
    onPremisesConfiguration?: OnPremisesConfiguration;
    /**
     * This message wraps up the information written by out-of-disk detection job.
     */
    outOfDiskReport?: SqlOutOfDiskReport;
    /**
     * The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.
     */
    project?: string;
    /**
     * The geographical region. Can be: * `us-central` (`FIRST_GEN` instances only) * `us-central1` (`SECOND_GEN` instances only) * `asia-east1` or `europe-west1`. Defaults to `us-central` or `us-central1` depending on the instance type. The region cannot be changed after instance creation.
     */
    region?: string;
    /**
     * Read-replica configuration for connecting to the primary instance.
     */
    replicaConfiguration?: ReplicaConfiguration;
    /**
     * The replicas of the instance.
     */
    replicaNames?: string[];
    /**
     * Initial root password. Use only on creation. You must set root passwords before you can connect to PostgreSQL instances.
     */
    rootPassword?: string;
    /**
     * The status indicating if instance satisfiesPzs. Reserved for future use.
     */
    satisfiesPzs?: boolean;
    /**
     * Any scheduled maintenance for this instance.
     */
    scheduledMaintenance?: SqlScheduledMaintenance;
    /**
     * The Compute Engine zone that the failover instance is currently serving from for a regional instance. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary/failover zone.
     */
    secondaryGceZone?: string;
    /**
     * The URI of this resource.
     */
    selfLink?: string;
    /**
     * SslCerts Resource
     */
    serverCaCert?: SslCert;
    /**
     * The service account email address assigned to the instance.\This property is read-only.
     */
    serviceAccountEmailAddress?: string;
    /**
     * Database instance settings.
     */
    settings?: Settings;
    /**
     * The current serving state of the Cloud SQL instance.
     */
    state?: DatabaseInstanceStateEnum;
    /**
     * If the instance state is SUSPENDED, the reason for the suspension.
     */
    suspensionReason?: DatabaseInstanceSuspensionReasonEnum[];
}
