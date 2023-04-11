import { SpeakeasyBase } from "../../../internal/utils";
/**
 * VMDK backing type.
 */
export declare enum VmwareDiskConfigBackingTypeEnum {
    BackingTypeUnspecified = "BACKING_TYPE_UNSPECIFIED",
    BackingTypeFlatV1 = "BACKING_TYPE_FLAT_V1",
    BackingTypeFlatV2 = "BACKING_TYPE_FLAT_V2",
    BackingTypePmem = "BACKING_TYPE_PMEM",
    BackingTypeRdmV1 = "BACKING_TYPE_RDM_V1",
    BackingTypeRdmV2 = "BACKING_TYPE_RDM_V2",
    BackingTypeSesparse = "BACKING_TYPE_SESPARSE",
    BackingTypeSesparseV1 = "BACKING_TYPE_SESPARSE_V1",
    BackingTypeSesparseV2 = "BACKING_TYPE_SESPARSE_V2"
}
/**
 * VMware disk config details.
 */
export declare class VmwareDiskConfig extends SpeakeasyBase {
    /**
     * VMDK backing type.
     */
    backingType?: VmwareDiskConfigBackingTypeEnum;
    /**
     * RDM compatibility mode.
     */
    rdmCompatibilityMode?: string;
    /**
     * Is VMDK shared with other VMs.
     */
    shared?: boolean;
    /**
     * VMDK disk mode.
     */
    vmdkDiskMode?: string;
}
