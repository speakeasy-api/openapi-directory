import { SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
import { AttachedDisk } from "./attacheddisk";
import { NetworkConfig } from "./networkconfig";
import { NetworkEndpoint } from "./networkendpoint";
import { SchedulingConfig } from "./schedulingconfig";
import { ServiceAccount } from "./serviceaccount";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { Symptom } from "./symptom";
/**
 * The health status of the TPU node.
 */
export declare enum NodeHealthEnum {
    HealthUnspecified = "HEALTH_UNSPECIFIED",
    Healthy = "HEALTHY",
    Timeout = "TIMEOUT",
    UnhealthyTensorflow = "UNHEALTHY_TENSORFLOW",
    UnhealthyMaintenance = "UNHEALTHY_MAINTENANCE"
}
/**
 * A TPU instance.
 */
export declare class NodeInput extends SpeakeasyBase {
    /**
     * A TPU accelerator configuration.
     */
    acceleratorConfig?: AcceleratorConfig;
    /**
     * Required. The type of hardware accelerators associated with this node.
     */
    acceleratorType?: string;
    /**
     * The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user's provided network, or the provided network is peered with another network that is using that CIDR block.
     */
    cidrBlock?: string;
    /**
     * The additional data disks for the Node.
     */
    dataDisks?: AttachedDisk[];
    /**
     * The user-supplied description of the TPU. Maximum of 512 characters.
     */
    description?: string;
    /**
     * The health status of the TPU node.
     */
    health?: NodeHealthEnum;
    /**
     * Resource labels to represent user-provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script
     */
    metadata?: Record<string, string>;
    /**
     * Network related configurations.
     */
    networkConfig?: NetworkConfig;
    /**
     * Required. The runtime version running in the Node.
     */
    runtimeVersion?: string;
    /**
     * Sets the scheduling options for this node.
     */
    schedulingConfig?: SchedulingConfig;
    /**
     * A service account.
     */
    serviceAccount?: ServiceAccount;
    /**
     * A set of Shielded Instance options.
     */
    shieldedInstanceConfig?: ShieldedInstanceConfig;
    /**
     * Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.
     */
    tags?: string[];
}
/**
 * Output only. The API version that created this Node.
 */
export declare enum NodeApiVersionEnum {
    ApiVersionUnspecified = "API_VERSION_UNSPECIFIED",
    V1Alpha1 = "V1_ALPHA1",
    V1 = "V1",
    V2Alpha1 = "V2_ALPHA1",
    V2 = "V2"
}
/**
 * Output only. The current state for the TPU Node.
 */
export declare enum NodeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Restarting = "RESTARTING",
    Reimaging = "REIMAGING",
    Deleting = "DELETING",
    Repairing = "REPAIRING",
    Stopped = "STOPPED",
    Stopping = "STOPPING",
    Starting = "STARTING",
    Preempted = "PREEMPTED",
    Terminated = "TERMINATED",
    Hiding = "HIDING",
    Hidden = "HIDDEN",
    Unhiding = "UNHIDING"
}
/**
 * A TPU instance.
 */
export declare class Node extends SpeakeasyBase {
    /**
     * A TPU accelerator configuration.
     */
    acceleratorConfig?: AcceleratorConfig;
    /**
     * Required. The type of hardware accelerators associated with this node.
     */
    acceleratorType?: string;
    /**
     * Output only. The API version that created this Node.
     */
    apiVersion?: NodeApiVersionEnum;
    /**
     * The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user's provided network, or the provided network is peered with another network that is using that CIDR block.
     */
    cidrBlock?: string;
    /**
     * Output only. The time when the node was created.
     */
    createTime?: string;
    /**
     * The additional data disks for the Node.
     */
    dataDisks?: AttachedDisk[];
    /**
     * The user-supplied description of the TPU. Maximum of 512 characters.
     */
    description?: string;
    /**
     * The health status of the TPU node.
     */
    health?: NodeHealthEnum;
    /**
     * Output only. If this field is populated, it contains a description of why the TPU Node is unhealthy.
     */
    healthDescription?: string;
    /**
     * Output only. The unique identifier for the TPU Node.
     */
    id?: string;
    /**
     * Resource labels to represent user-provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script
     */
    metadata?: Record<string, string>;
    /**
     * Output only. Immutable. The name of the TPU.
     */
    name?: string;
    /**
     * Network related configurations.
     */
    networkConfig?: NetworkConfig;
    /**
     * Output only. The network endpoints where TPU workers can be accessed and sent work. It is recommended that runtime clients of the node reach out to the 0th entry in this map first.
     */
    networkEndpoints?: NetworkEndpoint[];
    /**
     * Required. The runtime version running in the Node.
     */
    runtimeVersion?: string;
    /**
     * Sets the scheduling options for this node.
     */
    schedulingConfig?: SchedulingConfig;
    /**
     * A service account.
     */
    serviceAccount?: ServiceAccount;
    /**
     * A set of Shielded Instance options.
     */
    shieldedInstanceConfig?: ShieldedInstanceConfig;
    /**
     * Output only. The current state for the TPU Node.
     */
    state?: NodeStateEnum;
    /**
     * Output only. The Symptoms that have occurred to the TPU Node.
     */
    symptoms?: Symptom[];
    /**
     * Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.
     */
    tags?: string[];
}
