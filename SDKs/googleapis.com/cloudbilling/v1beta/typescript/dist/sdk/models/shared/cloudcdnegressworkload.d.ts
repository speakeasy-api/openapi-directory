import { SpeakeasyBase } from "../../../internal/utils";
import { Usage } from "./usage";
/**
 * The destination for the cache egress charges.
 */
export declare enum CloudCdnEgressWorkloadCacheEgressDestinationEnum {
    CacheEgressDestinationUnspecified = "CACHE_EGRESS_DESTINATION_UNSPECIFIED",
    CacheEgressDestinationAsiaPacific = "CACHE_EGRESS_DESTINATION_ASIA_PACIFIC",
    CacheEgressDestinationChina = "CACHE_EGRESS_DESTINATION_CHINA",
    CacheEgressDestinationEurope = "CACHE_EGRESS_DESTINATION_EUROPE",
    CacheEgressDestinationNorthAmerica = "CACHE_EGRESS_DESTINATION_NORTH_AMERICA",
    CacheEgressDestinationOceania = "CACHE_EGRESS_DESTINATION_OCEANIA",
    CacheEgressDestinationLatinAmerica = "CACHE_EGRESS_DESTINATION_LATIN_AMERICA",
    CacheEgressDestinationOtherDestinations = "CACHE_EGRESS_DESTINATION_OTHER_DESTINATIONS"
}
/**
 * Specifies usage for Cloud CDN egress.
 */
export declare class CloudCdnEgressWorkload extends SpeakeasyBase {
    /**
     * The destination for the cache egress charges.
     */
    cacheEgressDestination?: CloudCdnEgressWorkloadCacheEgressDestinationEnum;
    /**
     * An amount of usage over a time frame.
     */
    cacheEgressRate?: Usage;
}
