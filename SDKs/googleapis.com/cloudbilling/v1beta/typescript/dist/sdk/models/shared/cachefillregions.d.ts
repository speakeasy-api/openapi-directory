import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The destination region for cache fill.
 */
export declare enum CacheFillRegionsDestinationRegionEnum {
    CacheFillDestinationRegionUnspecified = "CACHE_FILL_DESTINATION_REGION_UNSPECIFIED",
    CacheFillDestinationRegionAsiaPacific = "CACHE_FILL_DESTINATION_REGION_ASIA_PACIFIC",
    CacheFillDestinationRegionEurope = "CACHE_FILL_DESTINATION_REGION_EUROPE",
    CacheFillDestinationRegionNorthAmerica = "CACHE_FILL_DESTINATION_REGION_NORTH_AMERICA",
    CacheFillDestinationRegionOceania = "CACHE_FILL_DESTINATION_REGION_OCEANIA",
    CacheFillDestinationRegionSouthAmerica = "CACHE_FILL_DESTINATION_REGION_SOUTH_AMERICA",
    CacheFillDestinationRegionChina = "CACHE_FILL_DESTINATION_REGION_CHINA",
    CacheFillDestinationRegionOthers = "CACHE_FILL_DESTINATION_REGION_OTHERS"
}
/**
 * The source region for cache fill.
 */
export declare enum CacheFillRegionsSourceRegionEnum {
    CacheFillSourceRegionUnspecified = "CACHE_FILL_SOURCE_REGION_UNSPECIFIED",
    CacheFillRegionAsiaPacific = "CACHE_FILL_REGION_ASIA_PACIFIC",
    CacheFillSourceRegionEurope = "CACHE_FILL_SOURCE_REGION_EUROPE",
    CacheFillSourceRegionNorthAmerica = "CACHE_FILL_SOURCE_REGION_NORTH_AMERICA",
    CacheFillSourceRegionOceania = "CACHE_FILL_SOURCE_REGION_OCEANIA",
    CacheFillSourceRegionSouthAmerica = "CACHE_FILL_SOURCE_REGION_SOUTH_AMERICA"
}
/**
 * Specifies the regions for Cache Fill.
 */
export declare class CacheFillRegions extends SpeakeasyBase {
    /**
     * The destination region for cache fill.
     */
    destinationRegion?: CacheFillRegionsDestinationRegionEnum;
    /**
     * The source region for cache fill.
     */
    sourceRegion?: CacheFillRegionsSourceRegionEnum;
}
