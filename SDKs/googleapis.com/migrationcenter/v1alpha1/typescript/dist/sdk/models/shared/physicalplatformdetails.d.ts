import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Platform specific details for Physical Machines.
 */
export declare class PhysicalPlatformDetails extends SpeakeasyBase {
    /**
     * Free text representation of the machine location. The format of this field should not be relied on. Different machines in the same location may have different string values for this field.
     */
    location?: string;
}
