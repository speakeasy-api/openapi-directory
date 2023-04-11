import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2EnvVarSource } from "./googlecloudrunv2envvarsource";
/**
 * EnvVar represents an environment variable present in a Container.
 */
export declare class GoogleCloudRunV2EnvVar extends SpeakeasyBase {
    /**
     * Required. Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.
     */
    name?: string;
    /**
     * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes.
     */
    value?: string;
    /**
     * EnvVarSource represents a source for the value of an EnvVar.
     */
    valueSource?: GoogleCloudRunV2EnvVarSource;
}
