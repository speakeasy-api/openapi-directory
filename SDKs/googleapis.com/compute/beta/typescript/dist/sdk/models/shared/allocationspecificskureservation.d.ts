import { SpeakeasyBase } from "../../../internal/utils";
import { AllocationSpecificSKUAllocationReservedInstanceProperties } from "./allocationspecificskuallocationreservedinstanceproperties";
/**
 * This reservation type allows to pre allocate specific instance configuration. Next ID: 6
 */
export declare class AllocationSpecificSKUReservation extends SpeakeasyBase {
    /**
     * [Output Only] Indicates how many instances are actually usable currently.
     */
    assuredCount?: string;
    /**
     * Specifies the number of resources that are allocated.
     */
    count?: string;
    /**
     * [Output Only] Indicates how many instances are in use.
     */
    inUseCount?: string;
    /**
     * Properties of the SKU instances being reserved. Next ID: 9
     */
    instanceProperties?: AllocationSpecificSKUAllocationReservedInstanceProperties;
    /**
     * Specifies the instance template to create the reservation. If you use this field, you must exclude the instanceProperties field. This field is optional, and it can be a full or partial URL. For example, the following are all valid URLs to an instance template: - https://www.googleapis.com/compute/v1/projects/project /global/instanceTemplates/instanceTemplate - projects/project/global/instanceTemplates/instanceTemplate - global/instanceTemplates/instanceTemplate
     */
    sourceInstanceTemplate?: string;
}
