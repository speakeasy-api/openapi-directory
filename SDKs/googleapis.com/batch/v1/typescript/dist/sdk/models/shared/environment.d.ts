import { SpeakeasyBase } from "../../../internal/utils";
import { KMSEnvMap } from "./kmsenvmap";
/**
 * An Environment describes a collection of environment variables to set when executing Tasks.
 */
export declare class Environment extends SpeakeasyBase {
    encryptedVariables?: KMSEnvMap;
    /**
     * A map of environment variable names to Secret Manager secret names. The VM will access the named secrets to set the value of each environment variable.
     */
    secretVariables?: Record<string, string>;
    /**
     * A map of environment variable names to values.
     */
    variables?: Record<string, string>;
}
