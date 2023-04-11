import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Runtime configuration for a workload.
 */
export declare class RuntimeConfig extends SpeakeasyBase {
    /**
     * Optional. Optional custom container image for the job runtime environment. If not specified, a default container image will be used.
     */
    containerImage?: string;
    /**
     * Optional. A mapping of property names to values, which are used to configure workload execution.
     */
    properties?: Record<string, string>;
    /**
     * Optional. Version of the batch runtime.
     */
    version?: string;
}
