import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Driver scheduling configuration.
 */
export declare class DriverSchedulingConfig extends SpeakeasyBase {
    /**
     * Required. The amount of memory in MB the driver is requesting.
     */
    memoryMb?: number;
    /**
     * Required. The number of vCPUs the driver is requesting.
     */
    vcores?: number;
}
