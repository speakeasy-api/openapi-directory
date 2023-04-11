import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Bike point occupancy
 */
export declare class TflApiPresentationEntitiesBikePointOccupancy extends SpeakeasyBase {
    /**
     * Total bike counts
     */
    bikesCount?: number;
    /**
     * Total ebikes count
     */
    eBikesCount?: number;
    /**
     * Empty docks
     */
    emptyDocks?: number;
    /**
     * Id of the bike point such as BikePoints_1
     */
    id?: string;
    /**
     * Name / Common name of the bike point
     */
    name?: string;
    /**
     * Total standard bikes count
     */
    standardBikesCount?: number;
    /**
     * Total docks available
     */
    totalDocks?: number;
}
