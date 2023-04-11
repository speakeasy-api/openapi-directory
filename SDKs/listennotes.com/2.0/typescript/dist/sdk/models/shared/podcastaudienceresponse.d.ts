import { SpeakeasyBase } from "../../../internal/utils";
export declare class PodcastAudienceResponseByRegions extends SpeakeasyBase {
    /**
     * percentage of audience from this specific region
     */
    ratio?: string;
    /**
     * 2-letter country code of a region.
     */
    region?: string;
}
/**
 * OK
 */
export declare class PodcastAudienceResponse extends SpeakeasyBase {
    byRegions?: PodcastAudienceResponseByRegions[];
}
