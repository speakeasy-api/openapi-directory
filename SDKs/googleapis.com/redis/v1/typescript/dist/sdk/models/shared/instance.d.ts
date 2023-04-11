import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenancePolicy, MaintenancePolicyInput } from "./maintenancepolicy";
import { MaintenanceSchedule, MaintenanceScheduleInput } from "./maintenanceschedule";
import { NodeInfo } from "./nodeinfo";
import { PersistenceConfig, PersistenceConfigInput } from "./persistenceconfig";
import { TlsCertificate } from "./tlscertificate";
/**
 * Optional. The network connect mode of the Redis instance. If not provided, the connect mode defaults to DIRECT_PEERING.
 */
export declare enum InstanceConnectModeEnum {
    ConnectModeUnspecified = "CONNECT_MODE_UNSPECIFIED",
    DirectPeering = "DIRECT_PEERING",
    PrivateServiceAccess = "PRIVATE_SERVICE_ACCESS"
}
/**
 * Optional. Read replicas mode for the instance. Defaults to READ_REPLICAS_DISABLED.
 */
export declare enum InstanceReadReplicasModeEnum {
    ReadReplicasModeUnspecified = "READ_REPLICAS_MODE_UNSPECIFIED",
    ReadReplicasDisabled = "READ_REPLICAS_DISABLED",
    ReadReplicasEnabled = "READ_REPLICAS_ENABLED"
}
export declare enum InstanceSuspensionReasonsEnum {
    SuspensionReasonUnspecified = "SUSPENSION_REASON_UNSPECIFIED",
    CustomerManagedKeyIssue = "CUSTOMER_MANAGED_KEY_ISSUE"
}
/**
 * Required. The service tier of the instance.
 */
export declare enum InstanceTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Basic = "BASIC",
    StandardHa = "STANDARD_HA"
}
/**
 * Optional. The TLS mode of the Redis instance. If not provided, TLS is disabled for the instance.
 */
export declare enum InstanceTransitEncryptionModeEnum {
    TransitEncryptionModeUnspecified = "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED",
    ServerAuthentication = "SERVER_AUTHENTICATION",
    Disabled = "DISABLED"
}
/**
 * A Memorystore for Redis instance.
 */
export declare class InstanceInput extends SpeakeasyBase {
    /**
     * Optional. If specified, at least one node will be provisioned in this zone in addition to the zone specified in location_id. Only applicable to standard tier. If provided, it must be a different zone from the one provided in [location_id]. Additional nodes beyond the first 2 will be placed in zones selected by the service.
     */
    alternativeLocationId?: string;
    /**
     * Optional. Indicates whether OSS Redis AUTH is enabled for the instance. If set to "true" AUTH is enabled on the instance. Default value is "false" meaning AUTH is disabled.
     */
    authEnabled?: boolean;
    /**
     * Optional. The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used.
     */
    authorizedNetwork?: string;
    /**
     * Optional. The available maintenance versions that an instance could update to.
     */
    availableMaintenanceVersions?: string[];
    /**
     * Optional. The network connect mode of the Redis instance. If not provided, the connect mode defaults to DIRECT_PEERING.
     */
    connectMode?: InstanceConnectModeEnum;
    /**
     * Optional. The KMS key reference that the customer provides when trying to create the instance.
     */
    customerManagedKey?: string;
    /**
     * An arbitrary and optional user-provided name for the instance.
     */
    displayName?: string;
    /**
     * Resource labels to represent user provided metadata
     */
    labels?: Record<string, string>;
    /**
     * Optional. The zone where the instance will be provisioned. If not provided, the service will choose a zone from the specified region for the instance. For standard tier, additional nodes will be added across multiple zones for protection against zonal failures. If specified, at least one node will be provisioned in this zone.
     */
    locationId?: string;
    /**
     * Maintenance policy for an instance.
     */
    maintenancePolicy?: MaintenancePolicyInput;
    /**
     * Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.
     */
    maintenanceSchedule?: MaintenanceScheduleInput;
    /**
     * Optional. The self service update maintenance version. The version is date based such as "20210712_00_00".
     */
    maintenanceVersion?: string;
    /**
     * Required. Redis memory size in GiB.
     */
    memorySizeGb?: number;
    /**
     * Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details.
     */
    name?: string;
    /**
     * Configuration of the persistence functionality.
     */
    persistenceConfig?: PersistenceConfigInput;
    /**
     * Optional. Read replicas mode for the instance. Defaults to READ_REPLICAS_DISABLED.
     */
    readReplicasMode?: InstanceReadReplicasModeEnum;
    /**
     * Optional. Redis configuration parameters, according to http://redis.io/topics/config. Currently, the only supported parameters are: Redis version 3.2 and newer: * maxmemory-policy * notify-keyspace-events Redis version 4.0 and newer: * activedefrag * lfu-decay-time * lfu-log-factor * maxmemory-gb Redis version 5.0 and newer: * stream-node-max-bytes * stream-node-max-entries
     */
    redisConfigs?: Record<string, string>;
    /**
     * Optional. The version of Redis software. If not provided, latest supported version will be used. Currently, the supported values are: * `REDIS_3_2` for Redis 3.2 compatibility * `REDIS_4_0` for Redis 4.0 compatibility (default) * `REDIS_5_0` for Redis 5.0 compatibility * `REDIS_6_X` for Redis 6.x compatibility
     */
    redisVersion?: string;
    /**
     * Optional. The number of replica nodes. The valid range for the Standard Tier with read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled for a Standard Tier instance, the only valid value is 1 and the default is 1. The valid value for basic tier is 0 and the default is also 0.
     */
    replicaCount?: number;
    /**
     * Optional. For DIRECT_PEERING mode, the CIDR range of internal addresses that are reserved for this instance. Range must be unique and non-overlapping with existing subnets in an authorized network. For PRIVATE_SERVICE_ACCESS mode, the name of one allocated IP address ranges associated with this private service access connection. If not provided, the service will choose an unused /29 block, for example, 10.0.0.0/29 or 192.168.0.0/29. For READ_REPLICAS_ENABLED the default block size is /28.
     */
    reservedIpRange?: string;
    /**
     * Optional. Additional IP range for node placement. Required when enabling read replicas on an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or "auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address range associated with the private service access connection, or "auto".
     */
    secondaryIpRange?: string;
    /**
     * Optional. reasons that causes instance in "SUSPENDED" state.
     */
    suspensionReasons?: InstanceSuspensionReasonsEnum[];
    /**
     * Required. The service tier of the instance.
     */
    tier?: InstanceTierEnum;
    /**
     * Optional. The TLS mode of the Redis instance. If not provided, TLS is disabled for the instance.
     */
    transitEncryptionMode?: InstanceTransitEncryptionModeEnum;
}
/**
 * Output only. The current state of this instance.
 */
export declare enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Repairing = "REPAIRING",
    Maintenance = "MAINTENANCE",
    Importing = "IMPORTING",
    FailingOver = "FAILING_OVER"
}
/**
 * A Memorystore for Redis instance.
 */
export declare class Instance extends SpeakeasyBase {
    /**
     * Optional. If specified, at least one node will be provisioned in this zone in addition to the zone specified in location_id. Only applicable to standard tier. If provided, it must be a different zone from the one provided in [location_id]. Additional nodes beyond the first 2 will be placed in zones selected by the service.
     */
    alternativeLocationId?: string;
    /**
     * Optional. Indicates whether OSS Redis AUTH is enabled for the instance. If set to "true" AUTH is enabled on the instance. Default value is "false" meaning AUTH is disabled.
     */
    authEnabled?: boolean;
    /**
     * Optional. The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used.
     */
    authorizedNetwork?: string;
    /**
     * Optional. The available maintenance versions that an instance could update to.
     */
    availableMaintenanceVersions?: string[];
    /**
     * Optional. The network connect mode of the Redis instance. If not provided, the connect mode defaults to DIRECT_PEERING.
     */
    connectMode?: InstanceConnectModeEnum;
    /**
     * Output only. The time the instance was created.
     */
    createTime?: string;
    /**
     * Output only. The current zone where the Redis primary node is located. In basic tier, this will always be the same as [location_id]. In standard tier, this can be the zone of any node in the instance.
     */
    currentLocationId?: string;
    /**
     * Optional. The KMS key reference that the customer provides when trying to create the instance.
     */
    customerManagedKey?: string;
    /**
     * An arbitrary and optional user-provided name for the instance.
     */
    displayName?: string;
    /**
     * Output only. Hostname or IP address of the exposed Redis endpoint used by clients to connect to the service.
     */
    host?: string;
    /**
     * Resource labels to represent user provided metadata
     */
    labels?: Record<string, string>;
    /**
     * Optional. The zone where the instance will be provisioned. If not provided, the service will choose a zone from the specified region for the instance. For standard tier, additional nodes will be added across multiple zones for protection against zonal failures. If specified, at least one node will be provisioned in this zone.
     */
    locationId?: string;
    /**
     * Maintenance policy for an instance.
     */
    maintenancePolicy?: MaintenancePolicy;
    /**
     * Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.
     */
    maintenanceSchedule?: MaintenanceSchedule;
    /**
     * Optional. The self service update maintenance version. The version is date based such as "20210712_00_00".
     */
    maintenanceVersion?: string;
    /**
     * Required. Redis memory size in GiB.
     */
    memorySizeGb?: number;
    /**
     * Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details.
     */
    name?: string;
    /**
     * Output only. Info per node.
     */
    nodes?: NodeInfo[];
    /**
     * Configuration of the persistence functionality.
     */
    persistenceConfig?: PersistenceConfig;
    /**
     * Output only. Cloud IAM identity used by import / export operations to transfer data to/from Cloud Storage. Format is "serviceAccount:". The value may change over time for a given instance so should be checked before each import/export operation.
     */
    persistenceIamIdentity?: string;
    /**
     * Output only. The port number of the exposed Redis endpoint.
     */
    port?: number;
    /**
     * Output only. Hostname or IP address of the exposed readonly Redis endpoint. Standard tier only. Targets all healthy replica nodes in instance. Replication is asynchronous and replica nodes will exhibit some lag behind the primary. Write requests must target 'host'.
     */
    readEndpoint?: string;
    /**
     * Output only. The port number of the exposed readonly redis endpoint. Standard tier only. Write requests should target 'port'.
     */
    readEndpointPort?: number;
    /**
     * Optional. Read replicas mode for the instance. Defaults to READ_REPLICAS_DISABLED.
     */
    readReplicasMode?: InstanceReadReplicasModeEnum;
    /**
     * Optional. Redis configuration parameters, according to http://redis.io/topics/config. Currently, the only supported parameters are: Redis version 3.2 and newer: * maxmemory-policy * notify-keyspace-events Redis version 4.0 and newer: * activedefrag * lfu-decay-time * lfu-log-factor * maxmemory-gb Redis version 5.0 and newer: * stream-node-max-bytes * stream-node-max-entries
     */
    redisConfigs?: Record<string, string>;
    /**
     * Optional. The version of Redis software. If not provided, latest supported version will be used. Currently, the supported values are: * `REDIS_3_2` for Redis 3.2 compatibility * `REDIS_4_0` for Redis 4.0 compatibility (default) * `REDIS_5_0` for Redis 5.0 compatibility * `REDIS_6_X` for Redis 6.x compatibility
     */
    redisVersion?: string;
    /**
     * Optional. The number of replica nodes. The valid range for the Standard Tier with read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled for a Standard Tier instance, the only valid value is 1 and the default is 1. The valid value for basic tier is 0 and the default is also 0.
     */
    replicaCount?: number;
    /**
     * Optional. For DIRECT_PEERING mode, the CIDR range of internal addresses that are reserved for this instance. Range must be unique and non-overlapping with existing subnets in an authorized network. For PRIVATE_SERVICE_ACCESS mode, the name of one allocated IP address ranges associated with this private service access connection. If not provided, the service will choose an unused /29 block, for example, 10.0.0.0/29 or 192.168.0.0/29. For READ_REPLICAS_ENABLED the default block size is /28.
     */
    reservedIpRange?: string;
    /**
     * Optional. Additional IP range for node placement. Required when enabling read replicas on an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or "auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address range associated with the private service access connection, or "auto".
     */
    secondaryIpRange?: string;
    /**
     * Output only. List of server CA certificates for the instance.
     */
    serverCaCerts?: TlsCertificate[];
    /**
     * Output only. The current state of this instance.
     */
    state?: InstanceStateEnum;
    /**
     * Output only. Additional information about the current status of this instance, if available.
     */
    statusMessage?: string;
    /**
     * Optional. reasons that causes instance in "SUSPENDED" state.
     */
    suspensionReasons?: InstanceSuspensionReasonsEnum[];
    /**
     * Required. The service tier of the instance.
     */
    tier?: InstanceTierEnum;
    /**
     * Optional. The TLS mode of the Redis instance. If not provided, TLS is disabled for the instance.
     */
    transitEncryptionMode?: InstanceTransitEncryptionModeEnum;
}
