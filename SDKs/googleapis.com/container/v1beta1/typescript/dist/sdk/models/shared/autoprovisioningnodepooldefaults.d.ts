import { SpeakeasyBase } from "../../../internal/utils";
import { NodeManagement } from "./nodemanagement";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { UpgradeSettings } from "./upgradesettings";
/**
 * AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP.
 */
export declare class AutoprovisioningNodePoolDefaults extends SpeakeasyBase {
    /**
     *  The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption
     */
    bootDiskKmsKey?: string;
    /**
     * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB.
     */
    diskSizeGb?: number;
    /**
     * Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard'
     */
    diskType?: string;
    /**
     * The image type to use for NAP created node. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types.
     */
    imageType?: string;
    /**
     * NodeManagement defines the set of node management services turned on for the node pool.
     */
    management?: NodeManagement;
    /**
     * Deprecated. Minimum CPU platform to be used for NAP created node pools. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as minCpuPlatform: Intel Haswell or minCpuPlatform: Intel Sandy Bridge. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform). This field is deprecated, min_cpu_platform should be specified using `cloud.google.com/requested-min-cpu-platform` label selector on the pod. To unset the min cpu platform field pass "automatic" as field value.
     */
    minCpuPlatform?: string;
    /**
     * The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Google Container Registry](https://cloud.google.com/container-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added.
     */
    oauthScopes?: string[];
    /**
     * The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used.
     */
    serviceAccount?: string;
    /**
     * A set of Shielded Instance options.
     */
    shieldedInstanceConfig?: ShieldedInstanceConfig;
    /**
     * These upgrade settings configure the upgrade strategy for the node pool. Use strategy to switch between the strategies applied to the node pool. If the strategy is SURGE, use max_surge and max_unavailable to control the level of parallelism and the level of disruption caused by upgrade. 1. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. 2. maxUnavailable controls the number of nodes that can be simultaneously unavailable. 3. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). If the strategy is BLUE_GREEN, use blue_green_settings to configure the blue-green upgrade related settings. 1. standard_rollout_policy is the default policy. The policy is used to control the way blue pool gets drained. The draining is executed in the batch mode. The batch size could be specified as either percentage of the node pool size or the number of nodes. batch_soak_duration is the soak time after each batch gets drained. 2. node_pool_soak_duration is the soak time after all blue nodes are drained. After this period, the blue pool nodes will be deleted.
     */
    upgradeSettings?: UpgradeSettings;
}
