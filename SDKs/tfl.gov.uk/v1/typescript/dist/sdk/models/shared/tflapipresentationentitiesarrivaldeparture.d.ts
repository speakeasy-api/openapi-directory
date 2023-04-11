import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesPredictionTiming } from "./tflapipresentationentitiespredictiontiming";
/**
 * Status of departure
 */
export declare enum TflApiPresentationEntitiesArrivalDepartureDepartureStatusEnum {
    OnTime = "OnTime",
    Delayed = "Delayed",
    Cancelled = "Cancelled",
    NotStoppingAtStation = "NotStoppingAtStation"
}
/**
 * DTO to capture the prediction details
 */
export declare class TflApiPresentationEntitiesArrivalDeparture extends SpeakeasyBase {
    /**
     * Reason for cancellation or delay
     */
    cause?: string;
    /**
     * Status of departure
     */
    departureStatus?: TflApiPresentationEntitiesArrivalDepartureDepartureStatusEnum;
    /**
     * Name of the destination
     */
    destinationName?: string;
    /**
     * Naptan Identifier for the prediction's destination
     */
    destinationNaptanId?: string;
    /**
     * Estimated time of arrival
     */
    estimatedTimeOfArrival?: Date;
    /**
     * Estimated time of arrival
     */
    estimatedTimeOfDeparture?: Date;
    /**
     * Estimated time of arrival
     */
    minutesAndSecondsToArrival?: string;
    /**
     * Estimated time of arrival
     */
    minutesAndSecondsToDeparture?: string;
    /**
     * Identifier for the prediction
     */
    naptanId?: string;
    /**
     * Platform name (for bus, this is the stop letter)
     */
    platformName?: string;
    /**
     * Estimated time of arrival
     */
    scheduledTimeOfArrival?: Date;
    /**
     * Estimated time of arrival
     */
    scheduledTimeOfDeparture?: Date;
    /**
     * Station name
     */
    stationName?: string;
    timing?: TflApiPresentationEntitiesPredictionTiming;
}
