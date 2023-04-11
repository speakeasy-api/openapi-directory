import { SpeakeasyBase } from "../../../internal/utils";
/**
 * GitHub Actions cache usage policy for an enterprise.
 */
export declare class ActionsCacheUsagePolicyEnterprise extends SpeakeasyBase {
    /**
     * For repositories in an enterprise, the maximum value that can be set as the limit for the sum of all caches in a repository, in gigabytes.
     */
    maxRepoCacheSizeLimitInGb?: number;
    /**
     * For repositories in an enterprise, the default size limit for the sum of all caches in a repository, in gigabytes.
     */
    repoCacheSizeLimitInGb?: number;
}
