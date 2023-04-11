import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Win-Loss-Tie record for a team, or an alliance.
 */
export declare class WLTRecord extends SpeakeasyBase {
    /**
     * Number of losses.
     */
    losses: number;
    /**
     * Number of ties.
     */
    ties: number;
    /**
     * Number of wins.
     */
    wins: number;
}
