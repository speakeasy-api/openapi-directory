import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The environment for the runtime.
 */
export declare enum RuntimeEnvironmentEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED",
    Gen1 = "GEN_1",
    Gen2 = "GEN_2"
}
/**
 * The stage of life this runtime is in, e.g., BETA, GA, etc.
 */
export declare enum RuntimeStageEnum {
    RuntimeStageUnspecified = "RUNTIME_STAGE_UNSPECIFIED",
    Development = "DEVELOPMENT",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED",
    Decommissioned = "DECOMMISSIONED"
}
/**
 * Describes a runtime and any special information (e.g., deprecation status) related to it.
 */
export declare class Runtime extends SpeakeasyBase {
    /**
     * The user facing name, eg 'Go 1.13', 'Node.js 12', etc.
     */
    displayName?: string;
    /**
     * The environment for the runtime.
     */
    environment?: RuntimeEnvironmentEnum;
    /**
     * The name of the runtime, e.g., 'go113', 'nodejs12', etc.
     */
    name?: string;
    /**
     * The stage of life this runtime is in, e.g., BETA, GA, etc.
     */
    stage?: RuntimeStageEnum;
    /**
     * Warning messages, e.g., a deprecation warning.
     */
    warnings?: string[];
}
