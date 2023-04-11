import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies options for controlling advanced machine features.
 */
export declare class AdvancedMachineFeatures extends SpeakeasyBase {
    /**
     * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
     */
    threadsPerCore?: string;
}
