import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMemcacheV1beta2MaintenancePolicy, GoogleCloudMemcacheV1beta2MaintenancePolicyInput } from "./googlecloudmemcachev1beta2maintenancepolicy";
import { InstanceMessage } from "./instancemessage";
import { MaintenanceSchedule } from "./maintenanceschedule";
import { MemcacheParameters, MemcacheParametersInput } from "./memcacheparameters";
import { Node } from "./node";
import { NodeConfig } from "./nodeconfig";
/**
 * The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is `MEMCACHE_1_5`. The minor version will be automatically determined by our system based on the latest supported minor version.
 */
export declare enum InstanceMemcacheVersionEnum {
    MemcacheVersionUnspecified = "MEMCACHE_VERSION_UNSPECIFIED",
    Memcache15 = "MEMCACHE_1_5"
}
/**
 * A Memorystore for Memcached instance
 */
export declare class InstanceInput extends SpeakeasyBase {
    /**
     * The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used.
     */
    authorizedNetwork?: string;
    /**
     * User provided name for the instance, which is only used for display purposes. Cannot be more than 80 characters.
     */
    displayName?: string;
    /**
     * List of messages that describe the current state of the Memcached instance.
     */
    instanceMessages?: InstanceMessage[];
    /**
     * Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: Record<string, string>;
    /**
     * Maintenance policy per instance.
     */
    maintenancePolicy?: GoogleCloudMemcacheV1beta2MaintenancePolicyInput;
    /**
     * The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is `MEMCACHE_1_5`. The minor version will be automatically determined by our system based on the latest supported minor version.
     */
    memcacheVersion?: InstanceMemcacheVersionEnum;
    /**
     * Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.
     */
    name?: string;
    /**
     * Configuration for a Memcached Node.
     */
    nodeConfig?: NodeConfig;
    /**
     * Required. Number of nodes in the Memcached instance.
     */
    nodeCount?: number;
    parameters?: MemcacheParametersInput;
    /**
     * Zones in which Memcached nodes should be provisioned. Memcached nodes will be equally distributed across these zones. If not provided, the service will by default create nodes in all zones in the region for the instance.
     */
    zones?: string[];
}
/**
 * Output only. The state of this Memcached instance.
 */
export declare enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Updating = "UPDATING",
    Deleting = "DELETING",
    PerformingMaintenance = "PERFORMING_MAINTENANCE"
}
/**
 * A Memorystore for Memcached instance
 */
export declare class Instance extends SpeakeasyBase {
    /**
     * The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used.
     */
    authorizedNetwork?: string;
    /**
     * Output only. The time the instance was created.
     */
    createTime?: string;
    /**
     * Output only. Endpoint for the Discovery API.
     */
    discoveryEndpoint?: string;
    /**
     * User provided name for the instance, which is only used for display purposes. Cannot be more than 80 characters.
     */
    displayName?: string;
    /**
     * List of messages that describe the current state of the Memcached instance.
     */
    instanceMessages?: InstanceMessage[];
    /**
     * Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: Record<string, string>;
    /**
     * Maintenance policy per instance.
     */
    maintenancePolicy?: GoogleCloudMemcacheV1beta2MaintenancePolicy;
    /**
     * Upcoming maintenance schedule.
     */
    maintenanceSchedule?: MaintenanceSchedule;
    /**
     * Output only. The full version of memcached server running on this instance. System automatically determines the full memcached version for an instance based on the input MemcacheVersion. The full version format will be "memcached-1.5.16".
     */
    memcacheFullVersion?: string;
    /**
     * Output only. List of Memcached nodes. Refer to Node message for more details.
     */
    memcacheNodes?: Node[];
    /**
     * The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is `MEMCACHE_1_5`. The minor version will be automatically determined by our system based on the latest supported minor version.
     */
    memcacheVersion?: InstanceMemcacheVersionEnum;
    /**
     * Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.
     */
    name?: string;
    /**
     * Configuration for a Memcached Node.
     */
    nodeConfig?: NodeConfig;
    /**
     * Required. Number of nodes in the Memcached instance.
     */
    nodeCount?: number;
    parameters?: MemcacheParameters;
    /**
     * Output only. The state of this Memcached instance.
     */
    state?: InstanceStateEnum;
    /**
     * Output only. Returns true if there is an update waiting to be applied
     */
    updateAvailable?: boolean;
    /**
     * Output only. The time the instance was updated.
     */
    updateTime?: string;
    /**
     * Zones in which Memcached nodes should be provisioned. Memcached nodes will be equally distributed across these zones. If not provided, the service will by default create nodes in all zones in the region for the instance.
     */
    zones?: string[];
}
