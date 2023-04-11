import { SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
import { ContainerImage } from "./containerimage";
import { Disk } from "./disk";
import { ReservationAffinity } from "./reservationaffinity";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { UpgradeHistoryEntry } from "./upgradehistoryentry";
import { VmImage } from "./vmimage";
/**
 * Input only. The type of the boot disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`).
 */
export declare enum InstanceBootDiskTypeEnum {
    DiskTypeUnspecified = "DISK_TYPE_UNSPECIFIED",
    PdStandard = "PD_STANDARD",
    PdSsd = "PD_SSD",
    PdBalanced = "PD_BALANCED",
    PdExtreme = "PD_EXTREME"
}
/**
 * Input only. The type of the data disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`).
 */
export declare enum InstanceDataDiskTypeEnum {
    DiskTypeUnspecified = "DISK_TYPE_UNSPECIFIED",
    PdStandard = "PD_STANDARD",
    PdSsd = "PD_SSD",
    PdBalanced = "PD_BALANCED",
    PdExtreme = "PD_EXTREME"
}
/**
 * Input only. Disk encryption method used on the boot and data disks, defaults to GMEK.
 */
export declare enum InstanceDiskEncryptionEnum {
    DiskEncryptionUnspecified = "DISK_ENCRYPTION_UNSPECIFIED",
    Gmek = "GMEK",
    Cmek = "CMEK"
}
/**
 * Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet.
 */
export declare enum InstanceNicTypeEnum {
    UnspecifiedNicType = "UNSPECIFIED_NIC_TYPE",
    VirtioNet = "VIRTIO_NET",
    Gvnic = "GVNIC"
}
/**
 * Output only. The state of this instance.
 */
export declare enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Starting = "STARTING",
    Provisioning = "PROVISIONING",
    Active = "ACTIVE",
    Stopping = "STOPPING",
    Stopped = "STOPPED",
    Deleted = "DELETED",
    Upgrading = "UPGRADING",
    Initializing = "INITIALIZING",
    Registering = "REGISTERING",
    Suspending = "SUSPENDING",
    Suspended = "SUSPENDED"
}
/**
 * The definition of a notebook instance.
 */
export declare class Instance extends SpeakeasyBase {
    /**
     * Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. Check [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported.
     */
    acceleratorConfig?: AcceleratorConfig;
    /**
     * Input only. The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB. If not specified, this defaults to 100.
     */
    bootDiskSizeGb?: string;
    /**
     * Input only. The type of the boot disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`).
     */
    bootDiskType?: InstanceBootDiskTypeEnum;
    /**
     * Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward
     */
    canIpForward?: boolean;
    /**
     * Definition of a container image for starting a notebook instance with the environment installed in a container.
     */
    containerImage?: ContainerImage;
    /**
     * Output only. Instance creation time.
     */
    createTime?: string;
    /**
     * Output only. Email address of entity that sent original CreateInstance request.
     */
    creator?: string;
    /**
     * Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers.
     */
    customGpuDriverPath?: string;
    /**
     * Input only. The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). You can choose the size of the data disk based on how big your notebooks and data are. If not specified, this defaults to 100.
     */
    dataDiskSizeGb?: string;
    /**
     * Input only. The type of the data disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`).
     */
    dataDiskType?: InstanceDataDiskTypeEnum;
    /**
     * Input only. Disk encryption method used on the boot and data disks, defaults to GMEK.
     */
    diskEncryption?: InstanceDiskEncryptionEnum;
    /**
     * Output only. Attached disks to notebook instance.
     */
    disks?: Disk[];
    /**
     * Whether the end user authorizes Google Cloud to install GPU driver on this instance. If this field is empty or set to false, the GPU driver won't be installed. Only applicable to instances with GPUs.
     */
    installGpuDriver?: boolean;
    /**
     * Input only. The owner of this instance after creation. Format: `alias@example.com` Currently supports one owner only. If not specified, all of the service account users of your VM instance's service account can use the instance.
     */
    instanceOwners?: string[];
    /**
     * Input only. The KMS key used to encrypt the disks, only applicable if disk_encryption is CMEK. Format: `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}` Learn more about [using your own encryption keys](/kms/docs/quickstart).
     */
    kmsKey?: string;
    /**
     * Labels to apply to this instance. These can be later modified by the setLabels method.
     */
    labels?: Record<string, string>;
    /**
     * Required. The [Compute Engine machine type](https://cloud.google.com/compute/docs/machine-types) of this instance.
     */
    machineType?: string;
    /**
     * Custom metadata to apply to this instance.
     */
    metadata?: Record<string, string>;
    /**
     * Output only. The name of this notebook instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     */
    name?: string;
    /**
     * The name of the VPC that this instance is in. Format: `projects/{project_id}/global/networks/{network_id}`
     */
    network?: string;
    /**
     * Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet.
     */
    nicType?: InstanceNicTypeEnum;
    /**
     * If true, the notebook instance will not register with the proxy.
     */
    noProxyAccess?: boolean;
    /**
     * If true, no public IP will be assigned to this instance.
     */
    noPublicIp?: boolean;
    /**
     * Input only. If true, the data disk will not be auto deleted when deleting the instance.
     */
    noRemoveDataDisk?: boolean;
    /**
     * Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (`gs://path-to-file/file-name`).
     */
    postStartupScript?: string;
    /**
     * Output only. The proxy endpoint that is used to access the Jupyter notebook.
     */
    proxyUri?: string;
    /**
     * Reservation Affinity for consuming Zonal reservation.
     */
    reservationAffinity?: ReservationAffinity;
    /**
     * The service account on this instance, giving access to other Google Cloud services. You can use any service account within the same project, but you must have the service account user permission to use the instance. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
     */
    serviceAccount?: string;
    /**
     * Optional. The URIs of service account scopes to be included in Compute Engine instances. If not specified, the following [scopes](https://cloud.google.com/compute/docs/access/service-accounts#accesscopesiam) are defined: - https://www.googleapis.com/auth/cloud-platform - https://www.googleapis.com/auth/userinfo.email If not using default scopes, you need at least: https://www.googleapis.com/auth/compute
     */
    serviceAccountScopes?: string[];
    /**
     * A set of Shielded Instance options. Check [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid.
     */
    shieldedInstanceConfig?: ShieldedInstanceConfig;
    /**
     * Output only. The state of this instance.
     */
    state?: InstanceStateEnum;
    /**
     * The name of the subnet that this instance is in. Format: `projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}`
     */
    subnet?: string;
    /**
     * Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
     */
    tags?: string[];
    /**
     * Output only. Instance update time.
     */
    updateTime?: string;
    /**
     * The upgrade history of this instance.
     */
    upgradeHistory?: UpgradeHistoryEntry[];
    /**
     * Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM.
     */
    vmImage?: VmImage;
}
/**
 * The definition of a notebook instance.
 */
export declare class InstanceInput extends SpeakeasyBase {
    /**
     * Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. Check [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported.
     */
    acceleratorConfig?: AcceleratorConfig;
    /**
     * Input only. The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB. If not specified, this defaults to 100.
     */
    bootDiskSizeGb?: string;
    /**
     * Input only. The type of the boot disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`).
     */
    bootDiskType?: InstanceBootDiskTypeEnum;
    /**
     * Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward
     */
    canIpForward?: boolean;
    /**
     * Definition of a container image for starting a notebook instance with the environment installed in a container.
     */
    containerImage?: ContainerImage;
    /**
     * Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers.
     */
    customGpuDriverPath?: string;
    /**
     * Input only. The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). You can choose the size of the data disk based on how big your notebooks and data are. If not specified, this defaults to 100.
     */
    dataDiskSizeGb?: string;
    /**
     * Input only. The type of the data disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`).
     */
    dataDiskType?: InstanceDataDiskTypeEnum;
    /**
     * Input only. Disk encryption method used on the boot and data disks, defaults to GMEK.
     */
    diskEncryption?: InstanceDiskEncryptionEnum;
    /**
     * Whether the end user authorizes Google Cloud to install GPU driver on this instance. If this field is empty or set to false, the GPU driver won't be installed. Only applicable to instances with GPUs.
     */
    installGpuDriver?: boolean;
    /**
     * Input only. The owner of this instance after creation. Format: `alias@example.com` Currently supports one owner only. If not specified, all of the service account users of your VM instance's service account can use the instance.
     */
    instanceOwners?: string[];
    /**
     * Input only. The KMS key used to encrypt the disks, only applicable if disk_encryption is CMEK. Format: `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}` Learn more about [using your own encryption keys](/kms/docs/quickstart).
     */
    kmsKey?: string;
    /**
     * Labels to apply to this instance. These can be later modified by the setLabels method.
     */
    labels?: Record<string, string>;
    /**
     * Required. The [Compute Engine machine type](https://cloud.google.com/compute/docs/machine-types) of this instance.
     */
    machineType?: string;
    /**
     * Custom metadata to apply to this instance.
     */
    metadata?: Record<string, string>;
    /**
     * The name of the VPC that this instance is in. Format: `projects/{project_id}/global/networks/{network_id}`
     */
    network?: string;
    /**
     * Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet.
     */
    nicType?: InstanceNicTypeEnum;
    /**
     * If true, the notebook instance will not register with the proxy.
     */
    noProxyAccess?: boolean;
    /**
     * If true, no public IP will be assigned to this instance.
     */
    noPublicIp?: boolean;
    /**
     * Input only. If true, the data disk will not be auto deleted when deleting the instance.
     */
    noRemoveDataDisk?: boolean;
    /**
     * Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (`gs://path-to-file/file-name`).
     */
    postStartupScript?: string;
    /**
     * Reservation Affinity for consuming Zonal reservation.
     */
    reservationAffinity?: ReservationAffinity;
    /**
     * The service account on this instance, giving access to other Google Cloud services. You can use any service account within the same project, but you must have the service account user permission to use the instance. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
     */
    serviceAccount?: string;
    /**
     * Optional. The URIs of service account scopes to be included in Compute Engine instances. If not specified, the following [scopes](https://cloud.google.com/compute/docs/access/service-accounts#accesscopesiam) are defined: - https://www.googleapis.com/auth/cloud-platform - https://www.googleapis.com/auth/userinfo.email If not using default scopes, you need at least: https://www.googleapis.com/auth/compute
     */
    serviceAccountScopes?: string[];
    /**
     * A set of Shielded Instance options. Check [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid.
     */
    shieldedInstanceConfig?: ShieldedInstanceConfig;
    /**
     * The name of the subnet that this instance is in. Format: `projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}`
     */
    subnet?: string;
    /**
     * Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
     */
    tags?: string[];
    /**
     * The upgrade history of this instance.
     */
    upgradeHistory?: UpgradeHistoryEntry[];
    /**
     * Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM.
     */
    vmImage?: VmImage;
}
