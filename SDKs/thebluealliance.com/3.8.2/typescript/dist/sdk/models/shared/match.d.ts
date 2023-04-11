import { SpeakeasyBase } from "../../../internal/utils";
import { MatchAlliance } from "./matchalliance";
/**
 * A list of alliances, the teams on the alliances, and their score.
 */
export declare class MatchAlliances extends SpeakeasyBase {
    blue?: MatchAlliance;
    red?: MatchAlliance;
}
/**
 * The competition level the match was played at.
 */
export declare enum MatchCompLevelEnum {
    Qm = "qm",
    Ef = "ef",
    Qf = "qf",
    Sf = "sf",
    F = "f"
}
export declare class MatchVideos extends SpeakeasyBase {
    /**
     * Unique key representing this video
     */
    key?: string;
    /**
     * Can be one of 'youtube' or 'tba'
     */
    type?: string;
}
/**
 * The color (red/blue) of the winning alliance. Will contain an empty string in the event of no winner, or a tie.
 */
export declare enum MatchWinningAllianceEnum {
    Red = "red",
    Blue = "blue",
    Unknown = ""
}
/**
 * Successful response
 */
export declare class Match extends SpeakeasyBase {
    /**
     * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of actual match start time.
     */
    actualTime?: number;
    /**
     * A list of alliances, the teams on the alliances, and their score.
     */
    alliances?: MatchAlliances;
    /**
     * The competition level the match was played at.
     */
    compLevel: MatchCompLevelEnum;
    /**
     * Event key of the event the match was played at.
     */
    eventKey: string;
    /**
     * TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may be appended to the competition level if more than one match in required per set.
     */
    key: string;
    /**
     * The match number of the match in the competition level.
     */
    matchNumber: number;
    /**
     * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) when the match result was posted.
     */
    postResultTime?: number;
    /**
     * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the TBA predicted match start time.
     */
    predictedTime?: number;
    /**
     * Score breakdown for auto, teleop, etc. points. Varies from year to year. May be null.
     */
    scoreBreakdown?: Record<string, any>;
    /**
     * The set number in a series of matches where more than one match is required in the match series.
     */
    setNumber: number;
    /**
     * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the scheduled match time, as taken from the published schedule.
     */
    time?: number;
    /**
     * Array of video objects associated with this match.
     */
    videos?: MatchVideos[];
    /**
     * The color (red/blue) of the winning alliance. Will contain an empty string in the event of no winner, or a tie.
     */
    winningAlliance?: MatchWinningAllianceEnum;
}
