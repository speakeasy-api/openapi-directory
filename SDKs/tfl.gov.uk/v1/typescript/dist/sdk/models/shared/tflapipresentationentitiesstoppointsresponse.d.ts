import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesStopPoint } from "./tflapipresentationentitiesstoppoint";
/**
 * A paged response containing StopPoints
 */
export declare class TflApiPresentationEntitiesStopPointsResponse extends SpeakeasyBase {
    /**
     * The centre latitude/longitude of this list of StopPoints
     */
    centrePoint?: number[];
    /**
     * The index of this page
     */
    page?: number;
    /**
     * The maximum size of the page in this response i.e. the maximum number of StopPoints
     */
    pageSize?: number;
    /**
     * Collection of stop points
     */
    stopPoints?: TflApiPresentationEntitiesStopPoint[];
    /**
     * The total number of StopPoints available across all pages
     */
    total?: number;
}
