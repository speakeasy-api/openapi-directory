import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The user preferences relating to target regions.
 */
export declare class RegionPreferences extends SpeakeasyBase {
    /**
     * A list of preferred regions, ordered by the most preferred region first. Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions.
     */
    preferredRegions?: string[];
}
