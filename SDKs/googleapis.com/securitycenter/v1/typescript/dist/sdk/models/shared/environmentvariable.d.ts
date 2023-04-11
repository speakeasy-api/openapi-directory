import { SpeakeasyBase } from "../../../internal/utils";
/**
 * EnvironmentVariable is a name-value pair to store environment variables for Process.
 */
export declare class EnvironmentVariable extends SpeakeasyBase {
    /**
     * Environment variable name as a JSON encoded string.
     */
    name?: string;
    /**
     * Environment variable value as a JSON encoded string.
     */
    val?: string;
}
