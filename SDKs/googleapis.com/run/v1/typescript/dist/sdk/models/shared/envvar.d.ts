import { SpeakeasyBase } from "../../../internal/utils";
import { EnvVarSource } from "./envvarsource";
/**
 * EnvVar represents an environment variable present in a Container.
 */
export declare class EnvVar extends SpeakeasyBase {
    /**
     * Required. Name of the environment variable. Must be a C_IDENTIFIER.
     */
    name?: string;
    /**
     * Value of the environment variable. Defaults to "". Variable references are not supported in Cloud Run.
     */
    value?: string;
    /**
     * EnvVarSource represents a source for the value of an EnvVar.
     */
    valueFrom?: EnvVarSource;
}
