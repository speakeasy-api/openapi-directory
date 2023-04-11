import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeAcceleratorConfig } from "./runtimeacceleratorconfig";
/**
 * Request for switching a Managed Notebook Runtime.
 */
export declare class SwitchRuntimeRequest extends SpeakeasyBase {
    /**
     * Definition of the types of hardware accelerators that can be used. Definition of the types of hardware accelerators that can be used. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `nvidia-tesla-k80` * `nvidia-tesla-p100` * `nvidia-tesla-v100` * `nvidia-tesla-p4` * `nvidia-tesla-t4` * `nvidia-tesla-a100`
     */
    acceleratorConfig?: RuntimeAcceleratorConfig;
    /**
     * machine type.
     */
    machineType?: string;
    /**
     * Idempotent request UUID.
     */
    requestId?: string;
}
