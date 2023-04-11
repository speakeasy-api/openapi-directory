import { SpeakeasyBase } from "../../../internal/utils";
export declare class MatchAlliance extends SpeakeasyBase {
    /**
     * TBA team keys (eg `frc254`) of any disqualified teams.
     */
    dqTeamKeys?: string[];
    /**
     * Score for this alliance. Will be null or -1 for an unplayed match.
     */
    score: number;
    /**
     * TBA team keys (eg `frc254`) of any teams playing as a surrogate.
     */
    surrogateTeamKeys?: string[];
    teamKeys: string[];
}
