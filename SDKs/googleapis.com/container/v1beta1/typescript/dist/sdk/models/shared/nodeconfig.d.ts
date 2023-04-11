import { SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
import { AdvancedMachineFeatures } from "./advancedmachinefeatures";
import { ConfidentialNodes } from "./confidentialnodes";
import { EphemeralStorageConfig } from "./ephemeralstorageconfig";
import { EphemeralStorageLocalSsdConfig } from "./ephemeralstoragelocalssdconfig";
import { FastSocket } from "./fastsocket";
import { GcfsConfig } from "./gcfsconfig";
import { LinuxNodeConfig } from "./linuxnodeconfig";
import { LocalNvmeSsdBlockConfig } from "./localnvmessdblockconfig";
import { NodeKubeletConfig } from "./nodekubeletconfig";
import { NodePoolLoggingConfig } from "./nodepoolloggingconfig";
import { NodeTaint } from "./nodetaint";
import { ReservationAffinity } from "./reservationaffinity";
import { SandboxConfig } from "./sandboxconfig";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { VirtualNIC } from "./virtualnic";
import { WindowsNodeConfig } from "./windowsnodeconfig";
import { WorkloadMetadataConfig } from "./workloadmetadataconfig";
/**
 * Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead.
 */
export declare class NodeConfig extends SpeakeasyBase {
    /**
     * A list of hardware accelerators to be attached to each node. See https://cloud.google.com/compute/docs/gpus for more information about support for GPUs.
     */
    accelerators?: AcceleratorConfig[];
    /**
     * Specifies options for controlling advanced machine features.
     */
    advancedMachineFeatures?: AdvancedMachineFeatures;
    /**
     *  The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption
     */
    bootDiskKmsKey?: string;
    /**
     * ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.
     */
    confidentialNodes?: ConfidentialNodes;
    /**
     * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB.
     */
    diskSizeGb?: number;
    /**
     * Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard'
     */
    diskType?: string;
    /**
     * EphemeralStorageConfig contains configuration for the ephemeral storage filesystem.
     */
    ephemeralStorageConfig?: EphemeralStorageConfig;
    /**
     * EphemeralStorageLocalSsdConfig contains configuration for the node ephemeral storage using Local SSDs.
     */
    ephemeralStorageLocalSsdConfig?: EphemeralStorageLocalSsdConfig;
    /**
     * Configuration of Fast Socket feature.
     */
    fastSocket?: FastSocket;
    /**
     * GcfsConfig contains configurations of Google Container File System.
     */
    gcfsConfig?: GcfsConfig;
    /**
     * Configuration of gVNIC feature.
     */
    gvnic?: VirtualNIC;
    /**
     * The image type to use for this node. Note that for a given image type, the latest version of it will be used. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types.
     */
    imageType?: string;
    /**
     * Node kubelet configs.
     */
    kubeletConfig?: NodeKubeletConfig;
    /**
     * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. In case of conflict in label keys, the applied set may differ depending on the Kubernetes version -- it's best to assume the behavior is undefined and conflicts should be avoided. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
     */
    labels?: Record<string, string>;
    /**
     * Parameters that can be configured on Linux nodes.
     */
    linuxNodeConfig?: LinuxNodeConfig;
    /**
     * LocalNvmeSsdBlockConfig contains configuration for using raw-block local NVMe SSDs
     */
    localNvmeSsdBlockConfig?: LocalNvmeSsdBlockConfig;
    /**
     * The number of local SSD disks to be attached to the node. The limit for this value is dependent upon the maximum number of disks available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information.
     */
    localSsdCount?: number;
    /**
     * NodePoolLoggingConfig specifies logging configuration for nodepools.
     */
    loggingConfig?: NodePoolLoggingConfig;
    /**
     * The name of a Google Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-types). If unspecified, the default machine type is `e2-medium`.
     */
    machineType?: string;
    /**
     * The metadata key/value pairs assigned to instances in the cluster. Keys must conform to the regexp `[a-zA-Z0-9-_]+` and be less than 128 bytes in length. These are reflected as part of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: - "cluster-location" - "cluster-name" - "cluster-uid" - "configure-sh" - "containerd-configure-sh" - "enable-oslogin" - "gci-ensure-gke-docker" - "gci-metrics-enabled" - "gci-update-strategy" - "instance-template" - "kube-env" - "startup-script" - "user-data" - "disable-address-manager" - "windows-startup-script-ps1" - "common-psm1" - "k8s-node-setup-psm1" - "install-ssh-psm1" - "user-profile-psm1" Values are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on them is that each value's size must be less than or equal to 32 KB. The total size of all keys and values must be less than 512 KB.
     */
    metadata?: Record<string, string>;
    /**
     * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as `minCpuPlatform: "Intel Haswell"` or `minCpuPlatform: "Intel Sandy Bridge"`. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).
     */
    minCpuPlatform?: string;
    /**
     * Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on [sole tenant nodes](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes).
     */
    nodeGroup?: string;
    /**
     * The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Google Container Registry](https://cloud.google.com/container-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added.
     */
    oauthScopes?: string[];
    /**
     * Whether the nodes are created as preemptible VM instances. See: https://cloud.google.com/compute/docs/instances/preemptible for more inforamtion about preemptible VM instances.
     */
    preemptible?: boolean;
    /**
     * [ReservationAffinity](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) is the configuration of desired reservation which instances could take capacity from.
     */
    reservationAffinity?: ReservationAffinity;
    /**
     * The resource labels for the node pool to use to annotate any related Google Compute Engine resources.
     */
    resourceLabels?: Record<string, string>;
    /**
     * SandboxConfig contains configurations of the sandbox to use for the node.
     */
    sandboxConfig?: SandboxConfig;
    /**
     * The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used.
     */
    serviceAccount?: string;
    /**
     * A set of Shielded Instance options.
     */
    shieldedInstanceConfig?: ShieldedInstanceConfig;
    /**
     * Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag.
     */
    spot?: boolean;
    /**
     * The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster or node pool creation. Each tag within the list must comply with RFC1035.
     */
    tags?: string[];
    /**
     * List of kubernetes taints to be applied to each node. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
     */
    taints?: NodeTaint[];
    /**
     * Parameters that can be configured on Windows nodes. Windows Node Config that define the parameters that will be used to configure the Windows node pool settings
     */
    windowsNodeConfig?: WindowsNodeConfig;
    /**
     * WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool.
     */
    workloadMetadataConfig?: WorkloadMetadataConfig;
}
