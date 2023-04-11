import { SpeakeasyBase } from "../../../internal/utils";
export declare class DistrictRankingEventPoints extends SpeakeasyBase {
    /**
     * Points awarded for alliance selection.
     */
    alliancePoints: number;
    /**
     * Points awarded for event awards.
     */
    awardPoints: number;
    /**
     * `true` if this event is a District Championship event.
     */
    districtCmp: boolean;
    /**
     * Points awarded for elimination match performance.
     */
    elimPoints: number;
    /**
     * TBA Event key for this event.
     */
    eventKey: string;
    /**
     * Points awarded for qualification match performance.
     */
    qualPoints: number;
    /**
     * Total points awarded at this event.
     */
    total: number;
}
/**
 * Rank of a team in a district.
 */
export declare class DistrictRanking extends SpeakeasyBase {
    /**
     * List of events that contributed to the point total for the team.
     */
    eventPoints?: DistrictRankingEventPoints[];
    /**
     * Total district points for the team.
     */
    pointTotal: number;
    /**
     * Numerical rank of the team, 1 being top rank.
     */
    rank: number;
    /**
     * Any points added to a team as a result of the rookie bonus.
     */
    rookieBonus?: number;
    /**
     * TBA team key for the team.
     */
    teamKey: string;
}
