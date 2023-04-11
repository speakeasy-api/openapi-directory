import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Accelerator describes Compute Engine accelerators to be attached to the VM.
 */
export declare class Accelerator extends SpeakeasyBase {
    /**
     * The number of accelerators of this type.
     */
    count?: string;
    /**
     * Deprecated: please use instances[0].install_gpu_drivers instead.
     */
    installGpuDrivers?: boolean;
    /**
     * The accelerator type. For example, "nvidia-tesla-t4". See `gcloud compute accelerator-types list`.
     */
    type?: string;
}
