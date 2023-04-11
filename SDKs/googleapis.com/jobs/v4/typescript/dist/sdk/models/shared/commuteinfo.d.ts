import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Commute details related to this job.
 */
export declare class CommuteInfo extends SpeakeasyBase {
    /**
     * A resource that represents a location with full geographic information.
     */
    jobLocation?: Location;
    /**
     * The number of seconds required to travel to the job location from the query location. A duration of 0 seconds indicates that the job isn't reachable within the requested duration, but was returned as part of an expanded query.
     */
    travelDuration?: string;
}
