import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkEndpoint } from "./networkendpoint";
import { SchedulingConfig } from "./schedulingconfig";
import { Symptom } from "./symptom";
/**
 * Output only. The API version that created this Node.
 */
export declare enum NodeApiVersionEnum {
    ApiVersionUnspecified = "API_VERSION_UNSPECIFIED",
    V1Alpha1 = "V1_ALPHA1",
    V1 = "V1",
    V2Alpha1 = "V2_ALPHA1"
}
/**
 * The health status of the TPU node.
 */
export declare enum NodeHealthEnum {
    HealthUnspecified = "HEALTH_UNSPECIFIED",
    Healthy = "HEALTHY",
    DeprecatedUnhealthy = "DEPRECATED_UNHEALTHY",
    Timeout = "TIMEOUT",
    UnhealthyTensorflow = "UNHEALTHY_TENSORFLOW",
    UnhealthyMaintenance = "UNHEALTHY_MAINTENANCE"
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
     * Output only. DEPRECATED! Use network_endpoints instead. The network address for the TPU Node as visible to Compute Engine instances.
     */
    ipAddress?: string;
    /**
     * Resource labels to represent user-provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * Output only. Immutable. The name of the TPU
     */
    name?: string;
    /**
     * The name of a network they wish to peer the TPU node to. It must be a preexisting Compute Engine network inside of the project on which this API has been activated. If none is provided, "default" will be used.
     */
    network?: string;
    /**
     * Output only. The network endpoints where TPU workers can be accessed and sent work. It is recommended that Tensorflow clients of the node reach out to the 0th entry in this map first.
     */
    networkEndpoints?: NetworkEndpoint[];
    /**
     * Output only. DEPRECATED! Use network_endpoints instead. The network port for the TPU Node as visible to Compute Engine instances.
     */
    port?: string;
    /**
     * Sets the scheduling options for this node.
     */
    schedulingConfig?: SchedulingConfig;
    /**
     * Output only. The service account used to run the tensor flow services within the node. To share resources, including Google Cloud Storage data, with the Tensorflow job running in the Node, this account must have permissions to that data.
     */
    serviceAccount?: string;
    /**
     * Output only. The current state for the TPU Node.
     */
    state?: NodeStateEnum;
    /**
     * Output only. The Symptoms that have occurred to the TPU Node.
     */
    symptoms?: Symptom[];
    /**
     * Required. The version of Tensorflow running in the Node.
     */
    tensorflowVersion?: string;
    /**
     * Whether the VPC peering for the node is set up through Service Networking API. The VPC Peering should be set up before provisioning the node. If this field is set, cidr_block field should not be specified. If the network, that you want to peer the TPU Node to, is Shared VPC networks, the node must be created with this this field enabled.
     */
    useServiceNetworking?: boolean;
}
/**
 * A TPU instance.
 */
export declare class NodeInput extends SpeakeasyBase {
    /**
     * Required. The type of hardware accelerators associated with this node.
     */
    acceleratorType?: string;
    /**
     * The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user's provided network, or the provided network is peered with another network that is using that CIDR block.
     */
    cidrBlock?: string;
    /**
     * The user-supplied description of the TPU. Maximum of 512 characters.
     */
    description?: string;
    /**
     * The health status of the TPU node.
     */
    health?: NodeHealthEnum;
    /**
     * Output only. DEPRECATED! Use network_endpoints instead. The network address for the TPU Node as visible to Compute Engine instances.
     */
    ipAddress?: string;
    /**
     * Resource labels to represent user-provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * The name of a network they wish to peer the TPU node to. It must be a preexisting Compute Engine network inside of the project on which this API has been activated. If none is provided, "default" will be used.
     */
    network?: string;
    /**
     * Output only. DEPRECATED! Use network_endpoints instead. The network port for the TPU Node as visible to Compute Engine instances.
     */
    port?: string;
    /**
     * Sets the scheduling options for this node.
     */
    schedulingConfig?: SchedulingConfig;
    /**
     * Required. The version of Tensorflow running in the Node.
     */
    tensorflowVersion?: string;
    /**
     * Whether the VPC peering for the node is set up through Service Networking API. The VPC Peering should be set up before provisioning the node. If this field is set, cidr_block field should not be specified. If the network, that you want to peer the TPU Node to, is Shared VPC networks, the node must be created with this this field enabled.
     */
    useServiceNetworking?: boolean;
}
