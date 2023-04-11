import { SpeakeasyBase } from "../../../internal/utils";
import { V3StopModel } from "./v3stopmodel";
export declare class V3PatternDeparture extends SpeakeasyBase {
    /**
     * Indicates if the metropolitan train service is at the platform at the time of query; returns false for other modes
     */
    atPlatform?: boolean;
    /**
     * Chronological sequence for the departures in a run. Order ascendingly by this field to get chronological order (earliest first) of departures with the same run_ref. NOTE, this field is not always N+1 or N-1 of the previous or following departure. e.g 100, 200, 250, 300 instead of 1, 2, 3, 4
     */
    departureSequence?: number;
    /**
     * Direction of travel identifier
     */
    directionId?: number;
    /**
     * Disruption information identifier(s)
     */
    disruptionIds?: number[];
    /**
     * Real-time estimate of departure time and date in ISO 8601 UTC format
     */
    estimatedDepartureUtc?: Date;
    /**
     * Flag indicating special condition for run (e.g. RR Reservations Required, GC Guaranteed Connection, DOO Drop Off Only, PUO Pick Up Only, MO Mondays only, TU Tuesdays only, WE Wednesdays only, TH Thursdays only, FR Fridays only, SS School days only; ignore E flag)
     */
    flags?: string;
    /**
     * Platform number at stop (metropolitan train only; returns null for other modes)
     */
    platformNumber?: string;
    /**
     * Route identifier
     */
    routeId?: number;
    /**
     * Numeric trip/service run identifier. Defaults to -1 when run identifier is Alphanumeric
     */
    runId?: number;
    /**
     * Alphanumeric trip/service run identifier
     */
    runRef?: string;
    /**
     * Scheduled (i.e. timetabled) departure time and date in ISO 8601 UTC format
     */
    scheduledDepartureUtc?: Date;
    /**
     * The stops to be skipped following the current departure in order.
     */
    skippedStops?: V3StopModel[];
    /**
     * Stop identifier
     */
    stopId?: number;
}
