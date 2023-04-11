import { SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
import { DiskConfig } from "./diskconfig";
import { InstanceReference } from "./instancereference";
import { ManagedGroupConfig } from "./managedgroupconfig";
/**
 * Optional. Specifies the preemptibility of the instance group.The default value for master and worker groups is NON_PREEMPTIBLE. This default cannot be changed.The default value for secondary instances is PREEMPTIBLE.
 */
export declare enum InstanceGroupConfigPreemptibilityEnum {
    PreemptibilityUnspecified = "PREEMPTIBILITY_UNSPECIFIED",
    NonPreemptible = "NON_PREEMPTIBLE",
    Preemptible = "PREEMPTIBLE",
    Spot = "SPOT"
}
/**
 * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
 */
export declare class InstanceGroupConfigInput extends SpeakeasyBase {
    /**
     * Optional. The Compute Engine accelerator configuration for these instances.
     */
    accelerators?: AcceleratorConfig[];
    /**
     * Specifies the config of disk options for a group of VM instances.
     */
    diskConfig?: DiskConfig;
    /**
     * Optional. The Compute Engine image resource used for cluster instances.The URI can represent an image or image family.Image examples: https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/[image-id] projects/[project_id]/global/images/[image-id] image-idImage family examples. Dataproc will use the most recent image from the family: https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/family/[custom-image-family-name] projects/[project_id]/global/images/family/[custom-image-family-name]If the URI is unspecified, it will be inferred from SoftwareConfig.image_version or the system default.
     */
    imageUri?: string;
    /**
     * Optional. The Compute Engine machine type used for cluster instances.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2 projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2 n1-standard-2Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, n1-standard-2.
     */
    machineTypeUri?: string;
    /**
     * Optional. Specifies the minimum cpu platform for the Instance Group. See Dataproc -> Minimum CPU Platform (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).
     */
    minCpuPlatform?: string;
    /**
     * Optional. The number of VM instances in the instance group. For HA cluster master_config groups, must be set to 3. For standard cluster master_config groups, must be set to 1.
     */
    numInstances?: number;
    /**
     * Optional. Specifies the preemptibility of the instance group.The default value for master and worker groups is NON_PREEMPTIBLE. This default cannot be changed.The default value for secondary instances is PREEMPTIBLE.
     */
    preemptibility?: InstanceGroupConfigPreemptibilityEnum;
}
/**
 * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
 */
export declare class InstanceGroupConfig extends SpeakeasyBase {
    /**
     * Optional. The Compute Engine accelerator configuration for these instances.
     */
    accelerators?: AcceleratorConfig[];
    /**
     * Specifies the config of disk options for a group of VM instances.
     */
    diskConfig?: DiskConfig;
    /**
     * Optional. The Compute Engine image resource used for cluster instances.The URI can represent an image or image family.Image examples: https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/[image-id] projects/[project_id]/global/images/[image-id] image-idImage family examples. Dataproc will use the most recent image from the family: https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/family/[custom-image-family-name] projects/[project_id]/global/images/family/[custom-image-family-name]If the URI is unspecified, it will be inferred from SoftwareConfig.image_version or the system default.
     */
    imageUri?: string;
    /**
     * Output only. The list of instance names. Dataproc derives the names from cluster_name, num_instances, and the instance group.
     */
    instanceNames?: string[];
    /**
     * Output only. List of references to Compute Engine instances.
     */
    instanceReferences?: InstanceReference[];
    /**
     * Output only. Specifies that this instance group contains preemptible instances.
     */
    isPreemptible?: boolean;
    /**
     * Optional. The Compute Engine machine type used for cluster instances.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2 projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2 n1-standard-2Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, n1-standard-2.
     */
    machineTypeUri?: string;
    /**
     * Specifies the resources used to actively manage an instance group.
     */
    managedGroupConfig?: ManagedGroupConfig;
    /**
     * Optional. Specifies the minimum cpu platform for the Instance Group. See Dataproc -> Minimum CPU Platform (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).
     */
    minCpuPlatform?: string;
    /**
     * Optional. The number of VM instances in the instance group. For HA cluster master_config groups, must be set to 3. For standard cluster master_config groups, must be set to 1.
     */
    numInstances?: number;
    /**
     * Optional. Specifies the preemptibility of the instance group.The default value for master and worker groups is NON_PREEMPTIBLE. This default cannot be changed.The default value for secondary instances is PREEMPTIBLE.
     */
    preemptibility?: InstanceGroupConfigPreemptibilityEnum;
}
