import { SpeakeasyBase } from "../../../internal/utils";
import { AllocationAggregateReservationReservedResourceInfo } from "./allocationaggregatereservationreservedresourceinfo";
/**
 * The VM family that all instances scheduled against this reservation must belong to.
 */
export declare enum AllocationAggregateReservationVmFamilyEnum {
    VmFamilyCloudTpuPodSliceCt4P = "VM_FAMILY_CLOUD_TPU_POD_SLICE_CT4P",
    VmFamilyComputeOptimizedC3 = "VM_FAMILY_COMPUTE_OPTIMIZED_C3",
    VmFamilyGeneralPurposeT2D = "VM_FAMILY_GENERAL_PURPOSE_T2D",
    VmFamilyMemoryOptimizedM3 = "VM_FAMILY_MEMORY_OPTIMIZED_M3"
}
/**
 * This reservation type is specified by total resource amounts (e.g. total count of CPUs) and can account for multiple instance SKUs. In other words, one can create instances of varying shapes against this reservation.
 */
export declare class AllocationAggregateReservation extends SpeakeasyBase {
    /**
     * [Output only] List of resources currently in use.
     */
    inUseResources?: AllocationAggregateReservationReservedResourceInfo[];
    /**
     * List of reserved resources (CPUs, memory, accelerators).
     */
    reservedResources?: AllocationAggregateReservationReservedResourceInfo[];
    /**
     * The VM family that all instances scheduled against this reservation must belong to.
     */
    vmFamily?: AllocationAggregateReservationVmFamilyEnum;
}
