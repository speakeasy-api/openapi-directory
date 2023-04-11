import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Git repo configuration for a single cluster.
 */
export declare class ConfigManagementGitConfig extends SpeakeasyBase {
    /**
     * The GCP Service Account Email used for auth when secret_type is gcpServiceAccount.
     */
    gcpServiceAccountEmail?: string;
    /**
     * URL for the HTTPS proxy to be used when communicating with the Git repo.
     */
    httpsProxy?: string;
    /**
     * The path within the Git repository that represents the top level of the repo to sync. Default: the root directory of the repository.
     */
    policyDir?: string;
    /**
     * Type of secret configured for access to the Git repo. Must be one of ssh, cookiefile, gcenode, token, gcpserviceaccount or none. The validation of this is case-sensitive. Required.
     */
    secretType?: string;
    /**
     * The branch of the repository to sync from. Default: master.
     */
    syncBranch?: string;
    /**
     * The URL of the Git repository to use as the source of truth.
     */
    syncRepo?: string;
    /**
     * Git revision (tag or hash) to check out. Default HEAD.
     */
    syncRev?: string;
    /**
     * Period in seconds between consecutive syncs. Default: 15.
     */
    syncWaitSecs?: string;
}
