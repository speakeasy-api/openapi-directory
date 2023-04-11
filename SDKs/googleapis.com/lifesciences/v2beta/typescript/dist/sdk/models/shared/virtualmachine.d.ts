import { SpeakeasyBase } from "../../../internal/utils";
import { Accelerator } from "./accelerator";
import { Disk } from "./disk";
import { Network } from "./network";
import { ServiceAccount } from "./serviceaccount";
import { Volume } from "./volume";
/**
 * Carries information about a Compute Engine VM resource.
 */
export declare class VirtualMachine extends SpeakeasyBase {
    /**
     * The list of accelerators to attach to the VM.
     */
    accelerators?: Accelerator[];
    /**
     * The size of the boot disk, in GB. The boot disk must be large enough to accommodate all of the Docker images from each action in the pipeline at the same time. If not specified, a small but reasonable default value is used.
     */
    bootDiskSizeGb?: number;
    /**
     * The host operating system image to use. Currently, only Container-Optimized OS images can be used. The default value is `projects/cos-cloud/global/images/family/cos-stable`, which selects the latest stable release of Container-Optimized OS. This option is provided to allow testing against the beta release of the operating system to ensure that the new version does not interact negatively with production pipelines. To test a pipeline against the beta release of Container-Optimized OS, use the value `projects/cos-cloud/global/images/family/cos-beta`.
     */
    bootImage?: string;
    /**
     * The CPU platform to request. An instance based on a newer platform can be allocated, but never one with fewer capabilities. The value of this parameter must be a valid Compute Engine CPU platform name (such as "Intel Skylake"). This parameter is only useful for carefully optimized work loads where the CPU platform has a significant impact. For more information about the effect of this parameter, see https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform.
     */
    cpuPlatform?: string;
    /**
     * The list of disks to create and attach to the VM. Specify either the `volumes[]` field or the `disks[]` field, but not both.
     */
    disks?: Disk[];
    /**
     * The Compute Engine Disk Images to use as a Docker cache. The disks will be mounted into the Docker folder in a way that the images present in the cache will not need to be pulled. The digests of the cached images must match those of the tags used or the latest version will still be pulled. The root directory of the ext4 image must contain `image` and `overlay2` directories copied from the Docker directory of a VM where the desired Docker images have already been pulled. Any images pulled that are not cached will be stored on the first cache disk instead of the boot disk. Only a single image is supported.
     */
    dockerCacheImages?: string[];
    /**
     * Whether Stackdriver monitoring should be enabled on the VM.
     */
    enableStackdriverMonitoring?: boolean;
    /**
     * Optional set of labels to apply to the VM and any attached disk resources. These labels must adhere to the [name and value restrictions](https://cloud.google.com/compute/docs/labeling-resources) on VM labels imposed by Compute Engine. Labels keys with the prefix 'google-' are reserved for use by Google. Labels applied at creation time to the VM. Applied on a best-effort basis to attached disk resources shortly after VM creation.
     */
    labels?: Record<string, string>;
    /**
     * Required. The machine type of the virtual machine to create. Must be the short name of a standard machine type (such as "n1-standard-1") or a custom machine type (such as "custom-1-4096", where "1" indicates the number of vCPUs and "4096" indicates the memory in MB). See [Creating an instance with a custom machine type](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#create) for more specifications on creating a custom machine type.
     */
    machineType?: string;
    /**
     * VM networking options.
     */
    network?: Network;
    /**
     * The NVIDIA driver version to use when attaching an NVIDIA GPU accelerator. The version specified here must be compatible with the GPU libraries contained in the container being executed, and must be one of the drivers hosted in the `nvidia-drivers-us-public` bucket on Google Cloud Storage.
     */
    nvidiaDriverVersion?: string;
    /**
     * If true, allocate a preemptible VM.
     */
    preemptible?: boolean;
    /**
     * If specified, the VM will only be allocated inside the matching reservation. It will fail if the VM parameters don't match the reservation.
     */
    reservation?: string;
    /**
     * Carries information about a Google Cloud service account.
     */
    serviceAccount?: ServiceAccount;
    /**
     * The list of disks and other storage to create or attach to the VM. Specify either the `volumes[]` field or the `disks[]` field, but not both.
     */
    volumes?: Volume[];
}
