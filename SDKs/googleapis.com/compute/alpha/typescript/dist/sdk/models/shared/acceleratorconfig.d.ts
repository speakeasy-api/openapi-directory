import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A specification of the type and number of accelerator cards attached to the instance.
 */
export declare class AcceleratorConfig extends SpeakeasyBase {
    /**
     * The number of the guest accelerator cards exposed to this instance.
     */
    acceleratorCount?: number;
    /**
     * Full or partial URL of the accelerator type resource to attach to this instance. For example: projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100 If you are creating an instance template, specify only the accelerator name. See GPUs on Compute Engine for a full list of accelerator types.
     */
    acceleratorType?: string;
}
