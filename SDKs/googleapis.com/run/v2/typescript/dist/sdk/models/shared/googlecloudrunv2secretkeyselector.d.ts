import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SecretEnvVarSource represents a source for the value of an EnvVar.
 */
export declare class GoogleCloudRunV2SecretKeySelector extends SpeakeasyBase {
    /**
     * Required. The name of the secret in Cloud Secret Manager. Format: {secret_name} if the secret is in the same project. projects/{project}/secrets/{secret_name} if the secret is in a different project.
     */
    secret?: string;
    /**
     * The Cloud Secret Manager secret version. Can be 'latest' for the latest version, an integer for a specific version, or a version alias.
     */
    version?: string;
}
