import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OCI repo configuration for a single cluster
 */
export declare class ConfigManagementOciConfig extends SpeakeasyBase {
    /**
     * The GCP Service Account Email used for auth when secret_type is gcpServiceAccount.
     */
    gcpServiceAccountEmail?: string;
    /**
     * The absolute path of the directory that contains the local resources. Default: the root directory of the image.
     */
    policyDir?: string;
    /**
     * Type of secret configured for access to the Git repo.
     */
    secretType?: string;
    /**
     * The OCI image repository URL for the package to sync from. e.g. `LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME`.
     */
    syncRepo?: string;
    /**
     * Period in seconds between consecutive syncs. Default: 15.
     */
    syncWaitSecs?: string;
}
