import { SpeakeasyBase } from "../../../internal/utils";
import { CustomMachineType } from "./custommachinetype";
import { PredefinedMachineType } from "./predefinedmachinetype";
/**
 * Specification of machine series, memory, and number of vCPUs.
 */
export declare class MachineType extends SpeakeasyBase {
    /**
     * Specification of a custom machine type.
     */
    customMachineType?: CustomMachineType;
    /**
     * Specification of a predefined machine type.
     */
    predefinedMachineType?: PredefinedMachineType;
}
