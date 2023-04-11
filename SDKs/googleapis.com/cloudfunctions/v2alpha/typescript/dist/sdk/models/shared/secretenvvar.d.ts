import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for a secret environment variable. It has the information necessary to fetch the secret value from secret manager and expose it as an environment variable.
 */
export declare class SecretEnvVar extends SpeakeasyBase {
    /**
     * Name of the environment variable.
     */
    key?: string;
    /**
     * Project identifier (preferably project number but can also be the project ID) of the project that contains the secret. If not set, it is assumed that the secret is in the same project as the function.
     */
    projectId?: string;
    /**
     * Name of the secret in secret manager (not the full resource name).
     */
    secret?: string;
    /**
     * Version of the secret (version number or the string 'latest'). It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new instances start.
     */
    version?: string;
}
