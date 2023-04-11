import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionConfig } from "./executionconfig";
import { PeripheralsConfig } from "./peripheralsconfig";
/**
 * Environment configuration for a workload.
 */
export declare class EnvironmentConfig extends SpeakeasyBase {
    /**
     * Execution configuration for a workload.
     */
    executionConfig?: ExecutionConfig;
    /**
     * Auxiliary services configuration for a workload.
     */
    peripheralsConfig?: PeripheralsConfig;
}
