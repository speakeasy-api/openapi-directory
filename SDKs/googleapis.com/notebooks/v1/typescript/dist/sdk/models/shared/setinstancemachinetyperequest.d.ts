import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for setting instance machine type.
 */
export declare class SetInstanceMachineTypeRequest extends SpeakeasyBase {
    /**
     * Required. The [Compute Engine machine type](https://cloud.google.com/compute/docs/machine-types).
     */
    machineType?: string;
}
