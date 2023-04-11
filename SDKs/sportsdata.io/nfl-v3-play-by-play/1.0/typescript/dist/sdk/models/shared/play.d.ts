import { SpeakeasyBase } from "../../../internal/utils";
import { PlayStat } from "./playstat";
import { ScoringPlay } from "./scoringplay";
export declare class Play extends SpeakeasyBase {
    created?: string;
    description?: string;
    distance?: number;
    down?: number;
    isScoringPlay?: boolean;
    opponent?: string;
    playID?: number;
    playStats?: PlayStat[];
    playTime?: string;
    quarterID?: number;
    quarterName?: string;
    scoringPlay?: ScoringPlay;
    sequence?: number;
    team?: string;
    timeRemainingMinutes?: number;
    timeRemainingSeconds?: number;
    type?: string;
    updated?: string;
    yardLine?: number;
    yardLineTerritory?: string;
    yardsGained?: number;
    yardsToEndZone?: number;
}
