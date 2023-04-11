import { SpeakeasyBase } from "../../../internal/utils";
import { FloodlightActivity } from "./floodlightactivity";
/**
 * Floodlight Activity List Response
 */
export declare class FloodlightActivitiesListResponse extends SpeakeasyBase {
    /**
     * Floodlight activity collection.
     */
    floodlightActivities?: FloodlightActivity[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
