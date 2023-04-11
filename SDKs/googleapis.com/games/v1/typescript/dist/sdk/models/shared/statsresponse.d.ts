import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A third party stats resource.
 */
export declare class StatsResponse extends SpeakeasyBase {
    /**
     * Average session length in minutes of the player. E.g., 1, 30, 60, ... . Not populated if there is not enough information.
     */
    avgSessionLengthMinutes?: number;
    /**
     * The probability of the player not returning to play the game in the next day. E.g., 0, 0.1, 0.5, ..., 1.0. Not populated if there is not enough information.
     */
    churnProbability?: number;
    /**
     * Number of days since the player last played this game. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information.
     */
    daysSinceLastPlayed?: number;
    /**
     * The probability of the player going to spend beyond a threshold amount of money. E.g., 0, 0.25, 0.50, 0.75. Not populated if there is not enough information.
     */
    highSpenderProbability?: number;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#statsResponse`.
     */
    kind?: string;
    /**
     * Number of in-app purchases made by the player in this game. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information.
     */
    numPurchases?: number;
    /**
     * The approximate number of sessions of the player within the last 28 days, where a session begins when the player is connected to Play Games Services and ends when they are disconnected. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information.
     */
    numSessions?: number;
    /**
     * The approximation of the sessions percentile of the player within the last 30 days, where a session begins when the player is connected to Play Games Services and ends when they are disconnected. E.g., 0, 0.25, 0.5, 0.75. Not populated if there is not enough information.
     */
    numSessionsPercentile?: number;
    /**
     * The approximate spend percentile of the player in this game. E.g., 0, 0.25, 0.5, 0.75. Not populated if there is not enough information.
     */
    spendPercentile?: number;
    /**
     * The probability of the player going to spend the game in the next seven days. E.g., 0, 0.25, 0.50, 0.75. Not populated if there is not enough information.
     */
    spendProbability?: number;
    /**
     * The predicted amount of money that the player going to spend in the next 28 days. E.g., 1, 30, 60, ... . Not populated if there is not enough information.
     */
    totalSpendNext28Days?: number;
}
