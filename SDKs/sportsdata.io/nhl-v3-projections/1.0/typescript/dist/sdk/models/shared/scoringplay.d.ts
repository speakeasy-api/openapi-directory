import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScoringPlay extends SpeakeasyBase {
    allowedByTeamID?: number;
    assistedByPlayerId1?: number;
    assistedByPlayerId2?: number;
    awayTeamScore?: number;
    emptyNet?: boolean;
    homeTeamScore?: number;
    periodID?: number;
    powerPlay?: boolean;
    scoredByPlayerID?: number;
    scoredByTeamID?: number;
    scoringPlayID?: number;
    sequence?: number;
    shortHanded?: boolean;
    timeRemainingMinutes?: number;
    timeRemainingSeconds?: number;
}
