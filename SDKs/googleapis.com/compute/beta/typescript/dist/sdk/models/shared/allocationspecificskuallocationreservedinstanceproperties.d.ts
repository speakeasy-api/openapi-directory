import { SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
import { AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk } from "./allocationspecificskuallocationallocatedinstancepropertiesreserveddisk";
/**
 * Specifies the frequency of planned maintenance events. The accepted values are: `PERIODIC`.
 */
export declare enum AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum {
    Periodic = "PERIODIC"
}
/**
 * Properties of the SKU instances being reserved. Next ID: 9
 */
export declare class AllocationSpecificSKUAllocationReservedInstanceProperties extends SpeakeasyBase {
    /**
     * Specifies accelerator type and count.
     */
    guestAccelerators?: AcceleratorConfig[];
    /**
     * Specifies amount of local ssd to reserve with each instance. The type of disk is local-ssd.
     */
    localSsds?: AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[];
    /**
     * An opaque location hint used to place the allocation close to other resources. This field is for use by internal tools that use the public API.
     */
    locationHint?: string;
    /**
     * Specifies type of machine (name only) which has fixed number of vCPUs and fixed amount of memory. This also includes specifying custom machine type following custom-NUMBER_OF_CPUS-AMOUNT_OF_MEMORY pattern.
     */
    machineType?: string;
    /**
     * Specifies the number of hours after reservation creation where instances using the reservation won't be scheduled for maintenance.
     */
    maintenanceFreezeDurationHours?: number;
    /**
     * Specifies the frequency of planned maintenance events. The accepted values are: `PERIODIC`.
     */
    maintenanceInterval?: AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum;
    /**
     * Minimum cpu platform the reservation.
     */
    minCpuPlatform?: string;
}
