import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance.
 */
export declare enum AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum {
    Nvme = "NVME",
    Scsi = "SCSI"
}
export declare class AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk extends SpeakeasyBase {
    /**
     * Specifies the size of the disk in base-2 GB.
     */
    diskSizeGb?: string;
    /**
     * Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance.
     */
    interface?: AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum;
}
