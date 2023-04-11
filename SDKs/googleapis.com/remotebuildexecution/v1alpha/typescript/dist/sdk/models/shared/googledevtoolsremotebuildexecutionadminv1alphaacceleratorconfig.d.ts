import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AcceleratorConfig defines the accelerator cards to attach to the VM.
 */
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig extends SpeakeasyBase {
    /**
     * The number of guest accelerator cards exposed to each VM.
     */
    acceleratorCount?: string;
    /**
     * The type of accelerator to attach to each VM, e.g. "nvidia-tesla-k80" for nVidia Tesla K80.
     */
    acceleratorType?: string;
}
