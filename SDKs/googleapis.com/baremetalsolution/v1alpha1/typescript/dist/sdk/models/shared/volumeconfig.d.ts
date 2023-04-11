import { SpeakeasyBase } from "../../../internal/utils";
import { LunRange } from "./lunrange";
import { NfsExport } from "./nfsexport";
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
export declare class VolumeConfig extends SpeakeasyBase {
    /**
     * A transient unique identifier to identify a volume within an ProvisioningConfig request.
     */
    id?: string;
    /**
     * Location where to deploy the volume.
     */
    location?: string;
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
     * Volume protocol.
     */
    protocol?: VolumeConfigProtocolEnum;
    /**
     * The requested size of this volume, in GB. This will be updated in a later iteration with a generic size field.
     */
    sizeGb?: number;
    /**
     * Whether snapshots should be enabled.
     */
    snapshotsEnabled?: boolean;
    /**
     * The type of this Volume.
     */
    type?: VolumeConfigTypeEnum;
    /**
     * User note field, it can be used by customers to add additional information for the BMS Ops team (b/194021617).
     */
    userNote?: string;
}
