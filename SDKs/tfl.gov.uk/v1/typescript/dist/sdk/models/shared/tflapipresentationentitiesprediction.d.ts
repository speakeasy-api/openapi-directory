import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesPredictionTiming } from "./tflapipresentationentitiespredictiontiming";
/**
 * DTO to capture the prediction details
 */
export declare class TflApiPresentationEntitiesPrediction extends SpeakeasyBase {
    /**
     * Bearing (between 0 to 359)
     */
    bearing?: string;
    /**
     * The current location of the vehicle.
     */
    currentLocation?: string;
    /**
     * Name of the destination
     */
    destinationName?: string;
    /**
     * Naptan Identifier for the prediction's destination
     */
    destinationNaptanId?: string;
    /**
     * Direction (unified to inbound/outbound)
     */
    direction?: string;
    /**
     * The expected arrival time of the vehicle at the stop/station
     */
    expectedArrival?: Date;
    /**
     * The identitier for the prediction
     */
    id?: string;
    /**
     * Unique identifier for the Line
     */
    lineId?: string;
    /**
     * Line Name
     */
    lineName?: string;
    /**
     * The mode name of the station/line the prediction relates to
     */
    modeName?: string;
    /**
     * Identifier for the prediction
     */
    naptanId?: string;
    /**
     * The type of the operation (1: is new or has been updated, 2: should be deleted from any client cache)
     */
    operationType?: number;
    /**
     * Platform name (for bus, this is the stop letter)
     */
    platformName?: string;
    /**
     * Station name
     */
    stationName?: string;
    /**
     * The expiry time for the prediction
     */
    timeToLive?: Date;
    /**
     * Prediction of the Time to station in seconds
     */
    timeToStation?: number;
    /**
     * Timestamp for when the prediction was inserted/modified (source column drives what objects are broadcast on each iteration)
     */
    timestamp?: Date;
    timing?: TflApiPresentationEntitiesPredictionTiming;
    /**
     * Routing information or other descriptive text about the path of the vehicle towards the destination
     */
    towards?: string;
    /**
     * The actual vehicle in transit (for train modes, the leading car of the rolling set)
     */
    vehicleId?: string;
}
