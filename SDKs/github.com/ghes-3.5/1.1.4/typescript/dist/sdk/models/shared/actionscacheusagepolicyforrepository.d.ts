import { SpeakeasyBase } from "../../../internal/utils";
/**
 * GitHub Actions cache usage policy for repository.
 */
export declare class ActionsCacheUsagePolicyForRepository extends SpeakeasyBase {
    /**
     * The size limit for the sum of all caches, in gigabytes.
     */
    repoCacheSizeLimitInGb: number;
}
