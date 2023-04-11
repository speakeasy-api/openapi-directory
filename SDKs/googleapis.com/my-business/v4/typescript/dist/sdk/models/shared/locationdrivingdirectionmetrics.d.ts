import { SpeakeasyBase } from "../../../internal/utils";
import { TopDirectionSources } from "./topdirectionsources";
/**
 * A location indexed with the regions that people usually come from. This is captured by counting how many driving-direction requests to this location are from each region.
 */
export declare class LocationDrivingDirectionMetrics extends SpeakeasyBase {
    /**
     * The location resource name this metric value belongs to.
     */
    locationName?: string;
    /**
     * Time zone (IANA timezone IDs, for example, 'Europe/London') of the location.
     */
    timeZone?: string;
    /**
     * Driving-direction requests by source region. By convention, these are sorted by count with at most 10 results.
     */
    topDirectionSources?: TopDirectionSources[];
}
