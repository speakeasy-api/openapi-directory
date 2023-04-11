import { SpeakeasyBase } from "../../../internal/utils";
import { LunRange } from "./lunrange";
import { NfsExport } from "./nfsexport";
/**
 * Performance tier of the Volume. Default is SHARED.
 */
export declare enum VolumeConfigPerformanceTierEnum {
    VolumePerformanceTierUnspecified = "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
    VolumePerformanceTierShared = "VOLUME_PERFORMANCE_TIER_SHARED",
    VolumePerformanceTierAssigned = "VOLUME_PERFORMANCE_TIER_ASSIGNED",
    VolumePerformanceTierHt = "VOLUME_PERFORMANCE_TIER_HT"
}
/**
 * Volume protocol.
 */
export declare enum VolumeConfigProtocolEnum {
    ProtocolUnspecified = "PROTOCOL_UNSPECIFIED",
    ProtocolFc = "PROTOCOL_FC",
    ProtocolNfs = "PROTOCOL_NFS"
}
/**
 * The type of this Volume.
 */
export declare enum VolumeConfigTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Flash = "FLASH",
    Disk = "DISK"
}
/**
 * Configuration parameters for a new volume.
 */
export declare class VolumeConfigInput extends SpeakeasyBase {
    /**
     * The GCP service of the storage volume. Available gcp_service are in https://cloud.google.com/bare-metal/docs/bms-planning.
     */
    gcpService?: string;
    /**
     * A transient unique identifier to identify a volume within an ProvisioningConfig request.
     */
    id?: string;
    /**
     * LUN ranges to be configured. Set only when protocol is PROTOCOL_FC.
     */
    lunRanges?: LunRange[];
    /**
     * Machine ids connected to this volume. Set only when protocol is PROTOCOL_FC.
     */
    machineIds?: string[];
    /**
     * NFS exports. Set only when protocol is PROTOCOL_NFS.
     */
    nfsExports?: NfsExport[];
    /**
     * Performance tier of the Volume. Default is SHARED.
     */
    performanceTier?: VolumeConfigPerformanceTierEnum;
    /**
     * Volume protocol.
     */
    protocol?: VolumeConfigProtocolEnum;
    /**
     * The requested size of this volume, in GB.
     */
    sizeGb?: number;
    /**
     * Whether snapshots should be enabled.
     */
    snapshotsEnabled?: boolean;
    /**
     * Input only. Name of the storage aggregate pool to allocate the volume in. Can be used only for VOLUME_PERFORMANCE_TIER_ASSIGNED volumes.
     */
    storageAggregatePool?: string;
    /**
     * The type of this Volume.
     */
    type?: VolumeConfigTypeEnum;
    /**
     * User note field, it can be used by customers to add additional information for the BMS Ops team .
     */
    userNote?: string;
}
/**
 * Configuration parameters for a new volume.
 */
export declare class VolumeConfig extends SpeakeasyBase {
    /**
     * The GCP service of the storage volume. Available gcp_service are in https://cloud.google.com/bare-metal/docs/bms-planning.
     */
    gcpService?: string;
    /**
     * A transient unique identifier to identify a volume within an ProvisioningConfig request.
     */
    id?: string;
    /**
     * LUN ranges to be configured. Set only when protocol is PROTOCOL_FC.
     */
    lunRanges?: LunRange[];
    /**
     * Machine ids connected to this volume. Set only when protocol is PROTOCOL_FC.
     */
    machineIds?: string[];
    /**
     * Output only. The name of the volume config.
     */
    name?: string;
    /**
     * NFS exports. Set only when protocol is PROTOCOL_NFS.
     */
    nfsExports?: NfsExport[];
    /**
     * Performance tier of the Volume. Default is SHARED.
     */
    performanceTier?: VolumeConfigPerformanceTierEnum;
    /**
     * Volume protocol.
     */
    protocol?: VolumeConfigProtocolEnum;
    /**
     * The requested size of this volume, in GB.
     */
    sizeGb?: number;
    /**
     * Whether snapshots should be enabled.
     */
    snapshotsEnabled?: boolean;
    /**
     * Input only. Name of the storage aggregate pool to allocate the volume in. Can be used only for VOLUME_PERFORMANCE_TIER_ASSIGNED volumes.
     */
    storageAggregatePool?: string;
    /**
     * The type of this Volume.
     */
    type?: VolumeConfigTypeEnum;
    /**
     * User note field, it can be used by customers to add additional information for the BMS Ops team .
     */
    userNote?: string;
}
