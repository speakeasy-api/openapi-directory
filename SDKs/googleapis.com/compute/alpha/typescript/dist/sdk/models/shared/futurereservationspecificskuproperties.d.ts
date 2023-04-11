import { SpeakeasyBase } from "../../../internal/utils";
import { AllocationSpecificSKUAllocationReservedInstanceProperties } from "./allocationspecificskuallocationreservedinstanceproperties";
export declare class FutureReservationSpecificSKUProperties extends SpeakeasyBase {
    /**
     * Properties of the SKU instances being reserved. Next ID: 9
     */
    instanceProperties?: AllocationSpecificSKUAllocationReservedInstanceProperties;
    /**
     * The instance template that will be used to populate the ReservedInstanceProperties of the future reservation
     */
    sourceInstanceTemplate?: string;
    /**
     * Total number of instances for which capacity assurance is requested at a future time period.
     */
    totalCount?: string;
}
