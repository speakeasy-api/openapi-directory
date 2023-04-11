import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum JourneyJourneyResultsAccessibilityPreferenceEnum {
    NoRequirements = "NoRequirements",
    NoSolidStairs = "NoSolidStairs",
    NoEscalators = "NoEscalators",
    NoElevators = "NoElevators",
    StepFreeToVehicle = "StepFreeToVehicle",
    StepFreeToPlatform = "StepFreeToPlatform"
}
export declare enum JourneyJourneyResultsBikeProficiencyEnum {
    Easy = "Easy",
    Moderate = "Moderate",
    Fast = "Fast"
}
/**
 * The cycle preference. eg possible options: "allTheWay" | "leaveAtStation" | "takeOnTransport" | "cycleHire"
 */
export declare enum JourneyJourneyResultsCyclePreferenceEnum {
    None = "None",
    LeaveAtStation = "LeaveAtStation",
    TakeOnTransport = "TakeOnTransport",
    AllTheWay = "AllTheWay",
    CycleHire = "CycleHire"
}
/**
 * The journey preference eg possible options: "leastinterchange" | "leasttime" | "leastwalking"
 */
export declare enum JourneyJourneyResultsJourneyPreferenceEnum {
    LeastInterchange = "LeastInterchange",
    LeastTime = "LeastTime",
    LeastWalking = "LeastWalking"
}
/**
 * Does the time given relate to arrival or leaving time? Possible options: "departing" | "arriving"
 */
export declare enum JourneyJourneyResultsTimeIsEnum {
    Arriving = "Arriving",
    Departing = "Departing"
}
/**
 * The walking speed. eg possible options: "slow" | "average" | "fast".
 */
export declare enum JourneyJourneyResultsWalkingSpeedEnum {
    Slow = "Slow",
    Average = "Average",
    Fast = "Fast"
}
export declare class JourneyJourneyResultsRequest extends SpeakeasyBase {
    /**
     * The accessibility preference must be a comma separated list eg. "noSolidStairs,noEscalators,noElevators,stepFreeToVehicle,stepFreeToPlatform"
     */
    accessibilityPreference?: JourneyJourneyResultsAccessibilityPreferenceEnum[];
    /**
     * Time adjustment command. eg possible options: "TripFirst" | "TripLast"
     */
    adjustment?: string;
    /**
     * Option to determine whether to return alternative cycling journey
     */
    alternativeCycle?: boolean;
    /**
     * Option to determine whether to return alternative walking journey
     */
    alternativeWalking?: boolean;
    /**
     * Flag to determine whether certain text (e.g. walking instructions) should be output with HTML tags or not.
     */
    applyHtmlMarkup?: boolean;
    /**
     * A comma separated list of cycling proficiency levels. eg possible options: "easy,moderate,fast"
     */
    bikeProficiency?: JourneyJourneyResultsBikeProficiencyEnum[];
    /**
     * A boolean to make Journey Planner calculate journeys in one temporal direction only. In other words, only calculate journeys after the 'depart' time, or before the 'arrive' time. By default, the Journey Planner engine (EFA) calculates journeys in both temporal directions.
     */
    calcOneDirection?: boolean;
    /**
     * The cycle preference. eg possible options: "allTheWay" | "leaveAtStation" | "takeOnTransport" | "cycleHire"
     */
    cyclePreference?: JourneyJourneyResultsCyclePreferenceEnum;
    /**
     * The date must be in yyyyMMdd format
     */
    date?: string;
    /**
     * Origin of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
     */
    from: string;
    /**
     * An optional name to associate with the origin of the journey in the results.
     */
    fromName?: string;
    /**
     * The journey preference eg possible options: "leastinterchange" | "leasttime" | "leastwalking"
     */
    journeyPreference?: JourneyJourneyResultsJourneyPreferenceEnum;
    /**
     * The max walking time in minutes for transfer eg. "120"
     */
    maxTransferMinutes?: string;
    /**
     * The max walking time in minutes for journeys eg. "120"
     */
    maxWalkingMinutes?: string;
    /**
     * The mode must be a comma separated list of modes. eg possible options: "public-bus,overground,train,tube,coach,dlr,cablecar,tram,river,walking,cycle"
     */
    mode?: string[];
    /**
     * Does the journey cover stops outside London? eg. "nationalSearch=true"
     */
    nationalSearch?: boolean;
    /**
     * A boolean to indicate whether public transport routes should include directions between platforms and station entrances.
     */
    routeBetweenEntrances?: boolean;
    /**
     * A boolean to indicate whether to return one or more taxi journeys. Note, setting this to true will override "useMultiModalCall".
     */
    taxiOnlyTrip?: boolean;
    /**
     * The time must be in HHmm format
     */
    time?: string;
    /**
     * Does the time given relate to arrival or leaving time? Possible options: "departing" | "arriving"
     */
    timeIs?: JourneyJourneyResultsTimeIsEnum;
    /**
     * Destination of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
     */
    to: string;
    /**
     * An optional name to associate with the destination of the journey in the results.
     */
    toName?: string;
    /**
     * A boolean to indicate whether or not to return 3 public transport journeys, a bus journey, a cycle hire journey, a personal cycle journey and a walking journey
     */
    useMultiModalCall?: boolean;
    /**
     * A boolean to indicate if we want to receive real time live arrivals data where available.
     */
    useRealTimeLiveArrivals?: boolean;
    /**
     * Travel through point on the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
     */
    via?: string;
    /**
     * An optional name to associate with the via point of the journey in the results.
     */
    viaName?: string;
    /**
     * A boolean to indicate whether to optimize journeys using walking
     */
    walkingOptimization?: boolean;
    /**
     * The walking speed. eg possible options: "slow" | "average" | "fast".
     */
    walkingSpeed?: JourneyJourneyResultsWalkingSpeedEnum;
}
export declare class JourneyJourneyResultsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesJourneyPlannerItineraryResult?: shared.TflApiPresentationEntitiesJourneyPlannerItineraryResult;
}
