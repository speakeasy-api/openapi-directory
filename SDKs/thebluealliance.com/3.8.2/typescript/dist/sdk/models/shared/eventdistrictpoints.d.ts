import { SpeakeasyBase } from "../../../internal/utils";
export declare class EventDistrictPointsPoints extends SpeakeasyBase {
    /**
     * Points awarded for alliance selection
     */
    alliancePoints: number;
    /**
     * Points awarded for event awards.
     */
    awardPoints: number;
    /**
     * Points awarded for elimination match performance.
     */
    elimPoints: number;
    /**
     * Points awarded for qualification match performance.
     */
    qualPoints: number;
    /**
     * Total points awarded at this event.
     */
    total: number;
}
export declare class EventDistrictPointsTiebreakers extends SpeakeasyBase {
    highestQualScores?: number[];
    qualWins?: number;
}
/**
 * Successful response
 */
export declare class EventDistrictPoints extends SpeakeasyBase {
    /**
     * Points gained for each team at the event. Stored as a key-value pair with the team key as the key, and an object describing the points as its value.
     */
    points: Record<string, EventDistrictPointsPoints>;
    /**
     * Tiebreaker values for each team at the event. Stored as a key-value pair with the team key as the key, and an object describing the tiebreaker elements as its value.
     */
    tiebreakers?: Record<string, EventDistrictPointsTiebreakers>;
}
