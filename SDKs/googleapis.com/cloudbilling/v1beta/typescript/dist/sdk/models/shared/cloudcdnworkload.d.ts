import { SpeakeasyBase } from "../../../internal/utils";
import { CacheFillRegions } from "./cachefillregions";
import { Usage } from "./usage";
/**
 * The source service for the cache fill.
 */
export declare enum CloudCdnWorkloadCacheFillOriginServiceEnum {
    CacheFillOriginServiceUnspecified = "CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED",
    CacheFillOriginServiceGoogleCloudStorageBucket = "CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET",
    CacheFillOriginServiceBackendService = "CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE"
}
/**
 * Specifies usage for Cloud CDN resources.
 */
export declare class CloudCdnWorkload extends SpeakeasyBase {
    /**
     * The source service for the cache fill.
     */
    cacheFillOriginService?: CloudCdnWorkloadCacheFillOriginServiceEnum;
    /**
     * An amount of usage over a time frame.
     */
    cacheFillRate?: Usage;
    /**
     * Specifies the regions for Cache Fill.
     */
    cacheFillRegions?: CacheFillRegions;
    /**
     * An amount of usage over a time frame.
     */
    cacheLookUpRate?: Usage;
}
